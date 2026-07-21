# Health Connect Collector

Health Connectに保存された健康・運動データを読み取り、分析用JSONとして保存する個人利用向けAndroidアプリです。

## 初版でできること

- Health Connectの読み取り権限をまとめて要求
- 過去30日分の健康・運動データを取得
- データを書き込んだアプリのパッケージ名を保持
- 保存先を選んでJSONを書き出し
- 対応端末では、WorkManagerによる1日1回のバックグラウンド収集
- 設定したHTTPS受信APIへ収集結果を自動送信

対象データは、体重、体脂肪率、除脂肪体重、基礎代謝、心拍、安静時心拍、HRV、血中酸素、呼吸数、睡眠、歩数、活動カロリー、運動セッションです。

## Android Studioで実行

1. Android Studioでこのフォルダを開く。
2. 初回表示されるAndroid SDK利用規約を確認して同意し、SDK Platform 36をインストールする。
3. Gradle同期が完了するまで待つ。
4. Health Connectを利用しているAndroid端末をUSB接続する。
5. `app`を端末へ実行する。
6. アプリ内で読み取りを許可し、「過去30日分を収集する」を押す。
7. 「JSONを保存する」からGoogle Driveなど任意の保存先を選ぶ。
8. 自動収集を使う場合は、「毎日の自動収集を有効にする」を押して追加権限を許可する。

Android 14以降ではHealth ConnectはOSに組み込まれています。Android 13以前ではGoogle PlayからHealth Connectアプリをインストールする必要があります。

## 自動送信を設定する

このリポジトリには、送信されたJSONをSQLiteへ保存する最小構成の受信APIが含まれています。

```bash
HEALTH_RECEIVER_TOKEN='十分に長いランダムな文字列' \
python3 server/health_receiver.py
```

受信APIは初期状態では `127.0.0.1:8080` で起動し、データを `server/health-data.sqlite3` に保存します。公開環境では、Caddy、nginx、Cloud Runなどを利用してHTTPS化してください。受信API自体を暗号化されていない状態でインターネットへ直接公開しないでください。

Dockerを利用できるサーバーへ公開する場合は、HTTPSと永続保存を含む `deploy/` の構成を利用できます。詳しい手順は `deploy/README.md` にあります。

HTTPS公開後、Androidアプリの「自動送信設定」に以下を入力します。

- 受信APIのHTTPS URL: `https://自分のドメイン/v1/health-exports`
- 認証トークン: 起動時の `HEALTH_RECEIVER_TOKEN` と同じ値

設定後は、手動収集と毎日07:50 JSTを目標にしたバックグラウンド収集の完了時に自動送信されます。通信失敗時、バックグラウンド収集はWorkManagerによって再試行されます。

受信APIの稼働確認:

```bash
curl http://127.0.0.1:8080/health
```

認証トークンはAndroidアプリ専用領域に保存され、アプリのバックアップ対象からも除外されます。ただし、端末のロックとOS更新も必ず有効にしてください。

## JSONの主な構造

```json
{
  "schemaVersion": 1,
  "exportedAt": "2026-06-07T00:00:00Z",
  "rangeStart": "...",
  "rangeEnd": "...",
  "counts": {
    "WeightRecord": 30
  },
  "records": [
    {
      "type": "WeightRecord",
      "sourcePackage": "com.example.source",
      "time": "...",
      "kilograms": 70.0
    }
  ]
}
```

## 次の拡張候補

- 履歴読み取り権限を追加し、30日より前のデータも収集する
- Health Connectの変更履歴を使った差分同期と削除反映
- 受信データを分析用テーブルへ変換
- Codex側で週次分析レポートを生成する

## レポートとDiscord通知

分析レポートは `reports/` にMarkdownとして保存します。

最新の初回レポート:

- `reports/health-report-20260608.md`

Discord Webhookへ通知する場合は、Webhook URLを環境変数として渡します。Webhook URLは秘密情報なので、リポジトリやMarkdownには直接書かないでください。

```bash
DISCORD_WEBHOOK_URL='https://discord.com/api/webhooks/...' \
  scripts/discord_notify_report.py reports/health-report-20260608.md
```

この通知スクリプトは、Markdownレポートから主要セクションを抜き出し、Discordのチャット内で読める要約レポートとして送ります。

## 静的ダッシュボード

過去データを見返すための静的Webサイトを `site/` に生成します。

```bash
scripts/build_health_site.py
```

生成後、ブラウザで `site/index.html` を開くと、体重、体脂肪率、活動カロリー、平均心拍、睡眠、歩数の推移をグリッド型のカードグラフで確認できます。

最新日には、回復度・睡眠・活動負荷の参考スコア、最大28日の個人基準との比較、今日の運動量と今夜の睡眠目安を表示します。スコアはBevelの独自値の複製ではなく、Health Connectから取得できたデータに基づくこのプロジェクトの参考値です。

Cloudflareに接続できない環境で、既存の `site/data.js` へ最新の分析ロジックだけを適用する場合:

```bash
scripts/build_health_site.py --offline
```

筋トレセクションでは、Health Connectの運動セッションから運動時間、鍛えた部位、メニューを表示します。カレンダーには、筋トレ日とウォーキング日が別色で表示されます。部位とメニューは、Hevyなどが書き出したタイトル、メモ、運動セグメントから自動整理します。

RingConnが運動セッションをWalkingと判定していない場合でも、RingConnの歩数区間が「2分以上・200歩以上・平均60歩/分以上」であればウォーキングとして推定します。3分以内の間隔は同じウォーキングにまとめ、明示的な運動セッションと重なる区間は二重計上しません。画面上では通常のウォーキングと同じ表示にします。

毎日08:00 JSTのGitHub Actionsで、Cloudflare D1の最新データからこのサイトを再生成し、GitHub Pagesへ公開します。

Androidアプリの自動収集を有効にすると、毎日07:50 JSTを目標に定期ジョブを登録した後に即時テストを1回実行します。画面には最終試行時刻、最終成功時刻、送信結果を表示します。

自動収集とは別に、毎日07:30 JST頃に手動のデータ収集・送信を促す通知を表示します。Android 13以降では、アプリ更新後の初回起動時に通知を許可してください。通知の実行時刻は端末の省電力制御により前後することがあります。
