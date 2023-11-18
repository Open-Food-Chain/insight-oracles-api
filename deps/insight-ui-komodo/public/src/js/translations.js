angular.module('insight').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de_DE', {"(Input unconfirmed)":"(Eingabe unbestätigt)","404 Page not found :(":"404 Seite nicht gefunden :(","<strong>insight</strong>  is an <a href=\"http://live.insight.is/\" target=\"_blank\">open-source Komodo blockchain explorer</a> with complete REST and websocket APIs that can be used for writing web wallets and other apps  that need more advanced blockchain queries than provided by komodod RPC.  Check out the <a href=\"https://github.com/supernetorg/insight-ui-komodo\" target=\"_blank\">source code</a>.":"<strong>insight</strong> ist ein <a href=\"http://live.insight.is/\" target=\"_blank\">Open Source Komodo Blockchain Explorer</a> mit vollständigen REST und Websocket APIs um eigene Wallets oder Applikationen zu implementieren. Hierbei werden fortschrittlichere Abfragen der Blockchain ermöglicht, bei denen die RPC des Komodod nicht mehr ausreichen. Der aktuelle <a href=\"https://github.com/supernetorg/insight-ui-komodo\" target=\"_blank\">Quellcode</a> ist auf Github zu finden.","<strong>insight</strong> is still in development, so be sure to report any bugs and provide feedback for improvement at our <a href=\"https://github.com/bitpay/insight/issues\" target=\"_blank\">github issue tracker</a>.":"<strong>insight</strong> befindet sich aktuell noch in der Entwicklung. Bitte sende alle gefundenen Fehler (Bugs) und Feedback zur weiteren Verbesserung an unseren <a href=\"https://github.com/supernetorg/insight-ui-komodo/issues\" target=\"_blank\">Github Issue Tracker</a>.","About":"Über insight","Address":"Adresse","Age":"Alter","Application Status":"Programmstatus","Best Block":"Bester Block","Komodo node information":"Komodo-Node Info","Block":"Block","Block Reward":"Belohnung","Blocks":"Blöcke","Bytes Serialized":"Serialisierte Bytes","Can't connect to komodod to get live updates from the p2p network. (Tried connecting to komodod at {{host}}:{{port}} and failed.)":"Es ist nicht möglich mit Komodod zu verbinden um live Aktualisierungen vom P2P Netzwerk zu erhalten. (Verbindungsversuch zu komodod an {{host}}:{{port}} ist fehlgeschlagen.)","Can't connect to insight server. Attempting to reconnect...":"Keine Verbindung zum insight-Server möglich. Es wird versucht die Verbindung neu aufzubauen...","Can't connect to internet. Please, check your connection.":"Keine Verbindung zum Internet möglich, bitte Zugangsdaten prüfen.","Complete":"Vollständig","Confirmations":"Bestätigungen","Conn":"Verbindungen","Connections to other nodes":"Verbindungen zu Nodes","Current Blockchain Tip (insight)":"Aktueller Blockchain Tip (insight)","Current Sync Status":"Aktueller Status","Details":"Details","Difficulty":"Schwierigkeit","Double spent attempt detected. From tx:":"Es wurde ein \"double Spend\" Versuch erkannt.Von tx:","Error!":"Fehler!","Fee":"Gebühr","Final Balance":"Schlussbilanz","Finish Date":"Fertigstellung","Go to home":"Zur Startseite","Hash Serialized":"Hash Serialisiert","Height":"Höhe","Included in Block":"Eingefügt in Block","Incoherence in levelDB detected:":"Es wurde eine Zusammenhangslosigkeit in der LevelDB festgestellt:","Info Errors":"Fehlerbeschreibung","Initial Block Chain Height":"Ursprüngliche Blockchain Höhe","Input":"Eingänge","Last Block":"Letzter Block","Last Block Hash (Komodod)":"Letzter Hash (Komodod)","Latest Blocks":"Letzte Blöcke","Latest Transactions":"Letzte Transaktionen","Loading Address Information":"Lade Adressinformationen","Loading Block Information":"Lade Blockinformation","Loading Selected Date...":"Lade gewähltes Datum...","Loading Transaction Details":"Lade Transaktionsdetails","Loading Transactions...":"Lade Transaktionen...","Loading...":"Lade...","Mined Time":"Block gefunden (Mining)","Mined by":"Gefunden von","Mining Difficulty":"Schwierigkeitgrad","Next Block":"Nächster Block","No Inputs (Newly Generated Coins)":"Keine Eingänge (Neu generierte Coins)","No blocks yet.":"Keine Blöcke bisher.","No matching records found!":"Keine passenden Einträge gefunden!","No. Transactions":"Anzahl Transaktionen","Number Of Transactions":"Anzahl der Transaktionen","Output":"Ausgänge","Powered by":"Powered by","Previous Block":"Letzter Block","Protocol version":"Protokollversion","Proxy setting":"Proxyeinstellung","Received Time":"Eingangszeitpunkt","Redirecting...":"Umleitung...","Search for block, transaction or address":"Suche Block, Transaktion oder Adresse","See all blocks":"Alle Blöcke anzeigen","Show Transaction Output data":"Zeige Abgänge","Show all":"Zeige Alles","Show input":"Zeige Eingänge","Show less":"Weniger anzeigen","Show more":"Mehr anzeigen","Size":"Größe","Size (bytes)":"Größe (bytes)","Skipped Blocks (previously synced)":"Verworfene Blöcke (bereits syncronisiert)","Start Date":"Startdatum","Status":"Status","Summary":"Zusammenfassung","Summary <small>confirmed</small>":"Zusammenfassung <small>bestätigt</small>","Sync Progress":"Fortschritt","Sync Status":"Syncronisation","Sync Type":"Art der Syncronisation","Synced Blocks":"Syncronisierte Blöcke","Testnet":"Testnet aktiv","There are no transactions involving this address.":"Es gibt keine Transaktionen zu dieser Adressse","Time Offset":"Zeitoffset zu UTC","Timestamp":"Zeitstempel","Today":"Heute","Total Amount":"Gesamtsumme","Total Received":"Insgesamt empfangen","Total Sent":"Insgesamt gesendet","Transaction":"Transaktion","Transaction Output Set Information":"Transaktions Abgänge","Transaction Outputs":"Abgänge","Transactions":"Transaktionen","Type":"Typ","Unconfirmed":"Unbestätigt","Unconfirmed Transaction!":"Unbestätigte Transaktion!","Unconfirmed Txs Balance":"Unbestätigtes Guthaben","Value Out":"Wert","Version":"Version","Waiting for blocks...":"Warte auf Blöcke...","Waiting for transactions...":"Warte auf Transaktionen...","by date.":"nach Datum.","first seen at":"zuerst gesehen am","mined":"gefunden","mined on:":"vom:","Waiting for blocks":"Warte auf Blöcke"});
    gettextCatalog.setStrings('es', {"(Input unconfirmed)":"(Entrada sin confirmar)","404 Page not found :(":"404 Página no encontrada :(","<strong>insight</strong>  is an <a href=\"http://live.insight.is/\" target=\"_blank\">open-source Komodo blockchain explorer</a> with complete REST and websocket APIs that can be used for writing web wallets and other apps  that need more advanced blockchain queries than provided by komodod RPC.  Check out the <a href=\"https://github.com/supernetorg/insight-ui-komodo\" target=\"_blank\">source code</a>.":"<strong>insight</strong>  es un <a href=\"http://live.insight.is/\" target=\"_blank\">explorador de bloques de Komodo open-source</a> con un completo conjunto de REST y APIs de websockets que pueden ser usadas para escribir monederos de Komodos y otras aplicaciones que requieran consultar un explorador de bloques.  Obtén el código en <a href=\"http://github.com/bitpay/insight\" target=\"_blank\">el repositorio abierto de Github</a>.","<strong>insight</strong> is still in development, so be sure to report any bugs and provide feedback for improvement at our <a href=\"https://github.com/bitpay/insight/issues\" target=\"_blank\">github issue tracker</a>.":"<strong>insight</strong> esta en desarrollo aún, por ello agradecemos que nos reporten errores o sugerencias para mejorar el software. <a href=\"https://github.com/supernetorg/insight-ui-komodo/issues\" target=\"_blank\">Github issue tracker</a>.","About":"Acerca de","Address":"Dirección","Age":"Edad","Application Status":"Estado de la Aplicación","Best Block":"Mejor Bloque","Komodo node information":"Información del nodo Komodo","Block":"Bloque","Block Reward":"Bloque Recompensa","Blocks":"Bloques","Bytes Serialized":"Bytes Serializados","Can't connect to komodod to get live updates from the p2p network. (Tried connecting to komodod at {{host}}:{{port}} and failed.)":"No se pudo conectar a komodod para obtener actualizaciones en vivo de la red p2p. (Se intentó conectar a komodod de {{host}}:{{port}} y falló.)","Can't connect to insight server. Attempting to reconnect...":"No se pudo conectar al servidor insight. Intentando re-conectar...","Can't connect to internet. Please, check your connection.":"No se pudo conectar a Internet. Por favor, verifique su conexión.","Complete":"Completado","Confirmations":"Confirmaciones","Conn":"Con","Connections to other nodes":"Conexiones a otros nodos","Current Blockchain Tip (insight)":"Actual Blockchain Tip (insight)","Current Sync Status":"Actual Estado de Sincronización","Details":"Detalles","Difficulty":"Dificultad","Double spent attempt detected. From tx:":"Intento de doble gasto detectado. De la transacción:","Error!":"¡Error!","Fee":"Tasa","Final Balance":"Balance Final","Finish Date":"Fecha Final","Go to home":"Volver al Inicio","Hash Serialized":"Hash Serializado","Height":"Altura","Included in Block":"Incluido en el Bloque","Incoherence in levelDB detected:":"Detectada una incoherencia en levelDB:","Info Errors":"Errores de Información","Initial Block Chain Height":"Altura de la Cadena en Bloque Inicial","Input":"Entrada","Last Block":"Último Bloque","Last Block Hash (Komodod)":"Último Bloque Hash (Komodod)","Latest Blocks":"Últimos Bloques","Latest Transactions":"Últimas Transacciones","Loading Address Information":"Cargando Información de la Dirección","Loading Block Information":"Cargando Información del Bloque","Loading Selected Date...":"Cargando Fecha Seleccionada...","Loading Transaction Details":"Cargando Detalles de la Transacción","Loading Transactions...":"Cargando Transacciones...","Loading...":"Cargando...","Mined Time":"Hora de Minado","Mined by":"Minado por","Mining Difficulty":"Dificultad de Minado","Next Block":"Próximo Bloque","No Inputs (Newly Generated Coins)":"Sin Entradas (Monedas Recién Generadas)","No blocks yet.":"No hay bloques aún.","No matching records found!":"¡No se encontraron registros coincidentes!","No. Transactions":"Nro. de Transacciones","Number Of Transactions":"Número de Transacciones","Output":"Salida","Powered by":"Funciona con","Previous Block":"Bloque Anterior","Protocol version":"Versión del protocolo","Proxy setting":"Opción de proxy","Received Time":"Hora de Recibido","Redirecting...":"Redireccionando...","Search for block, transaction or address":"Buscar bloques, transacciones o direcciones","See all blocks":"Ver todos los bloques","Show Transaction Output data":"Mostrar dato de Salida de la Transacción","Show all":"Mostrar todos","Show input":"Mostrar entrada","Show less":"Ver menos","Show more":"Ver más","Size":"Tamaño","Size (bytes)":"Tamaño (bytes)","Skipped Blocks (previously synced)":"Bloques Saltados (previamente sincronizado)","Start Date":"Fecha de Inicio","Status":"Estado","Summary":"Resumen","Summary <small>confirmed</small>":"Resumen <small>confirmados</small>","Sync Progress":"Proceso de Sincronización","Sync Status":"Estado de Sincronización","Sync Type":"Tipo de Sincronización","Synced Blocks":"Bloques Sincornizados","Testnet":"Red de prueba","There are no transactions involving this address.":"No hay transacciones para esta dirección","Time Offset":"Desplazamiento de hora","Timestamp":"Fecha y hora","Today":"Hoy","Total Amount":"Cantidad Total","Total Received":"Total Recibido","Total Sent":"Total Enviado","Transaction":"Transacción","Transaction Output Set Information":"Información del Conjunto de Salida de la Transacción","Transaction Outputs":"Salidas de la Transacción","Transactions":"Transacciones","Type":"Tipo","Unconfirmed":"Sin confirmar","Unconfirmed Transaction!":"¡Transacción sin confirmar!","Unconfirmed Txs Balance":"Balance sin confirmar","Value Out":"Valor de Salida","Version":"Versión","Waiting for blocks...":"Esperando bloques...","Waiting for transactions...":"Esperando transacciones...","by date.":"por fecha.","first seen at":"Visto a","mined":"minado","mined on:":"minado el:","Waiting for blocks":"Esperando bloques"});
    gettextCatalog.setStrings('ja', {"(Input unconfirmed)":"(入力は未検証です)","404 Page not found :(":"404 ページがみつかりません (´・ω・`)","<strong>insight</strong>  is an <a href=\"http://live.insight.is/\" target=\"_blank\">open-source Komodo blockchain explorer</a> with complete REST and websocket APIs that can be used for writing web wallets and other apps  that need more advanced blockchain queries than provided by komodod RPC.  Check out the <a href=\"https://github.com/supernetorg/insight-ui-komodo\" target=\"_blank\">source code</a>.":"<strong>insight</strong>は、komodod RPCの提供するものよりも詳細なブロックチェインへの問い合わせを必要とするウェブウォレットやその他のアプリを書くのに使える、完全なRESTおよびwebsocket APIを備えた<a href=\"http://live.insight.is/\" target=\"_blank\">オープンソースのビットコインブロックエクスプローラ</a>です。<a href=\"https://github.com/supernetorg/insight-ui-komodo\" target=\"_blank\">ソースコード</a>を確認","<strong>insight</strong> is still in development, so be sure to report any bugs and provide feedback for improvement at our <a href=\"https://github.com/bitpay/insight/issues\" target=\"_blank\">github issue tracker</a>.":"<strong>insight</strong>は現在開発中です。<a href=\"https://github.com/bitpay/insight/issues\" target=\"_blank\">githubのissueトラッカ</a>にてバグの報告や改善案の提案をお願いします。","About":"はじめに","Address":"アドレス","Age":"生成後経過時間","An error occured in the verification process.":"検証過程でエラーが発生しました。","An error occured:<br>{{error}}":"エラーが発生しました:<br>{{error}}","Application Status":"アプリケーションの状態","Best Block":"最良ブロック","Komodo comes with a way of signing arbitrary messages.":"Komodoには任意のメッセージを署名する昨日が備わっています。","Komodo node information":"Komodoノード情報","Block":"ブロック","Block Reward":"ブロック報酬","Blocks":"ブロック","Broadcast Raw Transaction":"生のトランザクションを配信","Bytes Serialized":"シリアライズ後の容量 (バイト)","Can't connect to komodod to get live updates from the p2p network. (Tried connecting to komodod at {{host}}:{{port}} and failed.)":"P2Pネットワークからライブ情報を取得するためにkomododへ接続することができませんでした。({{host}}:{{port}} への接続を試みましたが、失敗しました。)","Can't connect to insight server. Attempting to reconnect...":"insight サーバに接続できません。再接続しています...","Can't connect to internet. Please, check your connection.":"インターネットに接続できません。コネクションを確認してください。","Complete":"完了","Confirmations":"検証数","Conn":"接続数","Connections to other nodes":"他ノードへの接続","Current Blockchain Tip (insight)":"現在のブロックチェインのTip (insight)","Current Sync Status":"現在の同期状況","Details":"詳細","Difficulty":"難易度","Double spent attempt detected. From tx:":"二重支払い攻撃をこのトランザクションから検知しました：","Error message:":"エラーメッセージ:","Error!":"エラー！","Fee":"手数料","Final Balance":"最終残高","Finish Date":"終了日時","Go to home":"ホームへ","Hash Serialized":"シリアライズデータのハッシュ値","Height":"ブロック高","Included in Block":"取り込まれたブロック","Incoherence in levelDB detected:":"levelDBの破損を検知しました:","Info Errors":"エラー情報","Initial Block Chain Height":"起動時のブロック高","Input":"入力","Last Block":"直前のブロック","Last Block Hash (Komodod)":"直前のブロックのハッシュ値 (Komodod)","Latest Blocks":"最新のブロック","Latest Transactions":"最新のトランザクション","Loading Address Information":"アドレス情報を読み込んでいます","Loading Block Information":"ブロック情報を読み込んでいます","Loading Selected Date...":"選択されたデータを読み込んでいます...","Loading Transaction Details":"トランザクションの詳細を読み込んでいます","Loading Transactions...":"トランザクションを読み込んでいます...","Loading...":"ロード中...","Message":"メッセージ","Mined Time":"採掘時刻","Mined by":"採掘者","Mining Difficulty":"採掘難易度","Next Block":"次のブロック","No Inputs (Newly Generated Coins)":"入力なし (新しく生成されたコイン)","No blocks yet.":"ブロックはありません。","No matching records found!":"一致するレコードはありません！","No. Transactions":"トランザクション数","Number Of Transactions":"トランザクション数","Output":"出力","Powered by":"Powered by","Previous Block":"前のブロック","Protocol version":"プロトコルバージョン","Proxy setting":"プロキシ設定","Raw transaction data":"トランザクションの生データ","Raw transaction data must be a valid hexadecimal string.":"生のトランザクションデータは有効な16進数でなければいけません。","Received Time":"受信時刻","Redirecting...":"リダイレクトしています...","Search for block, transaction or address":"ブロック、トランザクション、アドレスを検索","See all blocks":"すべてのブロックをみる","Send transaction":"トランザクションを送信","Show Transaction Output data":"トランザクションの出力データをみる","Show all":"すべて表示","Show input":"入力を表示","Show less":"隠す","Show more":"表示する","Signature":"署名","Size":"サイズ","Size (bytes)":"サイズ (バイト)","Skipped Blocks (previously synced)":"スキップされたブロック (同期済み)","Start Date":"開始日時","Status":"ステータス","Summary":"概要","Summary <small>confirmed</small>":"サマリ <small>検証済み</small>","Sync Progress":"同期の進捗状況","Sync Status":"同期ステータス","Sync Type":"同期タイプ","Synced Blocks":"同期されたブロック数","Testnet":"テストネット","The message failed to verify.":"メッセージの検証に失敗しました。","The message is verifiably from {{verification.address}}.":"メッセージは{{verification.address}}により検証されました。","There are no transactions involving this address.":"このアドレスに対するトランザクションはありません。","This form can be used to broadcast a raw transaction in hex format over\n        the Komodo network.":"このフォームでは、16進数フォーマットの生のトランザクションをKomodoネットワーク上に配信することができます。","This form can be used to verify that a message comes from\n        a specific Komodo address.":"このフォームでは、メッセージが特定のKomodoアドレスから来たかどうかを検証することができます。","Time Offset":"時間オフセット","Timestamp":"タイムスタンプ","Today":"今日","Total Amount":"Komodo総量","Total Received":"総入金額","Total Sent":"総送金額","Transaction":"トランザクション","Transaction Output Set Information":"トランザクションの出力セット情報","Transaction Outputs":"トランザクションの出力","Transaction succesfully broadcast.<br>Transaction id: {{txid}}":"トランザクションの配信に成功しました。<br>トランザクションID: {{txid}}","Transactions":"トランザクション","Type":"タイプ","Unconfirmed":"未検証","Unconfirmed Transaction!":"未検証のトランザクションです！","Unconfirmed Txs Balance":"未検証トランザクションの残高","Value Out":"出力値","Verify":"検証","Verify signed message":"署名済みメッセージを検証","Version":"バージョン","Waiting for blocks...":"ブロックを待っています...","Waiting for transactions...":"トランザクションを待っています...","by date.":"日毎。","first seen at":"最初に発見された日時","mined":"採掘された","mined on:":"採掘日時:","(Mainchain)":"(メインチェーン)","(Orphaned)":"(孤立したブロック)","Bits":"Bits","Block #{{block.height}}":"ブロック #{{block.height}}","BlockHash":"ブロックのハッシュ値","Blocks <br> mined on:":"ブロック <br> 採掘日","Coinbase":"コインベース","Hash":"ハッシュ値","LockTime":"ロック時間","Merkle Root":"Merkleルート","Nonce":"Nonce","Ooops!":"おぉっと！","Output is spent":"出力は使用済みです","Output is unspent":"出力は未使用です","Scan":"スキャン","Show/Hide items details":"アイテムの詳細を表示または隠す","Waiting for blocks":"ブロックを待っています","by date. {{detail}} {{before}}":"日時順 {{detail}} {{before}}","scriptSig":"scriptSig","{{tx.confirmations}} Confirmations":"{{tx.confirmations}} 検証","<span class=\"glyphicon glyphicon-warning-sign\"></span> (Orphaned)":"<span class=\"glyphicon glyphicon-warning-sign\"></span> (孤立したブロック)","<span class=\"glyphicon glyphicon-warning-sign\"></span> Incoherence in levelDB detected: {{vin.dbError}}":"<span class=\"glyphicon glyphicon-warning-sign\"></span> Incoherence in levelDB detected: {{vin.dbError}}","Waiting for blocks <span class=\"loader-gif\"></span>":"ブロックを待っています <span class=\"loader-gif\"></span>"});
    gettextCatalog.setStrings('ru', {"(Input unconfirmed)":"(неподтвержденный вход)","404 Page not found :(":"404 Страница не найдена :(","<a href=\"https://komodoplatform.com\" target=\"_blank\" title=\"Komodo Platform\">Komodo Platform</a> strives to accelerate the adoption of blockchain technologies around the globe and to lead the world in blockchain integration. All of the Komodo’s unique and cutting-edge technologies are open-source and available to everyone.":"<a href=\"https://komodoplatform.com\" target=\"_blank\" title=\"Komodo Platform\">Komodo Platform</a> strives to accelerate the adoption of blockchain technologies around the globe and to lead the world in blockchain integration. All of the Komodo’s unique and cutting-edge technologies are open-source and available to everyone.","Address":"Адрес","Age":"Время","An error occured in the verification process.":"Произошла ошибка в процессе проверки.","An error occured:<br>{{error}}":"Произошла ошибка:<br>{{error}}","Application Status":"Статус приложения","Block":"Блок","Block Reward":"Награда за блок","Blocks":"Блоки","Broadcast Raw Transaction":"Отправить raw-транзакцию в сеть","Can't connect to insight server. Attempting to reconnect...":"Ошибка подклоючения к серверу insight. Повторная попытка...","Can't connect to internet. Please, check your connection.":"Ошибка подключения к интернет. Пожалуйста, проверьте соединение.","Can't connect to komodod to get live updates from the p2p network. (Tried connecting to komodod at {{host}}:{{port}} and failed.)":"Ошибка подключения к komodod для получения обновлений из сети. (Попытка подключения к {{host}}:{{port}} не удалась.)","Charts":"Графики","Complete":"Завершено","Confirmations":"Подтверждений","Conn":"Узлы","Connections to other nodes":"Соединений с другими узлами","Current Blockchain Tip (insight)":"Текущая вершина блокчейна (insight)","Current Sync Status":"Текущий статус синхронизации","Details":"Подробная информация","Difficulty":"Сложность","Double spent attempt detected. From tx:":"Попытка двойной траты. Транзакция:","End-to-end Blockchain Solutions Provider empowering developers to build freely\nand participate in creating the largest open blockchain network.":"End-to-end Blockchain Solutions Provider empowering developers to build freely\nand participate in creating the largest open blockchain network.","Error message:":"Описание ошибки:","Error!":"Ошибка!","Fee":"Комиссия","Fee Rate":"Размер комисии","Final Balance":"Итоговый баланс","Finish Date":"Время завершения","Go to home":"Домой","Height":"Высота","Included in Block":"Входит в блок","Incoherence in levelDB detected:":"Нарушение связности в LevelDB:","Info Errors":"Информация об ошибках","Initial Block Chain Height":"Начальная высота блокчейна","Input":"Вход","Komodo comes with a way of signing arbitrary messages.":"Komodo comes with a way of signing arbitrary messages.","Komodo node information":"Информация об узле","Last Block":"Последний блок","Last Block Hash (Komodod)":"Хеш последнего блока (komodod)","Latest Blocks":"Последние блоки","Latest Transactions":"Последние транзакции","Loading Address Information":"Загрузка информации\n об адресе","Loading Block Information":"Загрузка информации о блоке","Loading Selected Date...":"Загрузка выбранной даты...","Loading Transaction Details":"Загрузка деталей транзакции","Loading Transactions...":"Загрузка транзакций...","Loading chart...":"Загрузка графиков...","Loading...":"Загрузка...","Message":"Сообщение","Mined Time":"Время получения","Mined by":"Майнер","Mining Difficulty":"Сложность майнинга","Network":"Сеть","Next Block":"Следующий блок","No Inputs":"Нет входов","No Inputs (Newly Generated Coins)":"Нет входов (coinbase транзакция)","No JoinSplits":"Нет операций (sprout)","No Outputs":"Нет выходов","No Shielded Spends and Outputs":"Нет операций (sapling)","No blocks yet.":"Пока нет блоков.","No matching records found!":"Не найдено записей!","No. Transactions":"Всего транзакций","Number Of Transactions":"Количество транзакций","Output":"Выход","Powered by":"Powered by","Previous Block":"Предыдущий блок","Protocol version":"Версия протокола","Proxy setting":"Настройки proxy","Public input":"Публичный вход","Public output":"Публичный выход","Raw transaction data":"Raw данные транзакции","Raw transaction data must be a valid hexadecimal string.":"Raw данные транзакции должны быть правильной hex строкой.","Received Time":"Время получения","Redirecting...":"Перенаправление ...","Search for block, transaction or address":"Поиск блока, транзакции или адреса","See all blocks":"Просмотр всех блоков","Send transaction":"Отправить транзакцию","Show all":"Показать все","Show input":"Показать вход","Show less":"Скрыть","Show more":"Показать","Signature":"Подпись","Size":"Размер","Size (bytes)":"Размер (байт)","Skipped Blocks (previously synced)":"Пропущенные блоки (ранее синхронизированные)","Start Date":"Время начала","Status":"Статус","Summary":"Итог","Summary <small>confirmed</small>":"Итог <small>подтвержденный</small>","Sync Progress":"Синхронизация","Sync Status":"Статус синхронизации","Sync Type":"Тип синхронизации","Synced Blocks":"Синхронизировано блоков","The message failed to verify.":"Проверка подписи сообщения не пройдена.","The message is verifiably from {{verification.address}}.":"Сообщение подписано отправителем {{verification.address}}.","There are no transactions involving this address.":"Для этого адреса нет транзакций.","This form can be used to broadcast a raw transaction in hex format over\n        the Komodo network.":"Эта форма может быть использована для отправки raw транзакции в hex\n        формате через сеть.","This form can be used to verify that a message comes from\n        a specific Komodo address.":"Эта форма может быть использована для проверки\n        отправителя (адреса) сообщения.","Time Offset":"Смещение времени","Timestamp":"Дата / время","Today":"Сегодня","Total Received":"Всего получено","Total Sent":"Всего отправлено","Transaction":"Транзакция","Transaction succesfully broadcast.<br>Transaction id: {{txid}}":"Транзакция успешно отправлена.<br>TXID: {{txid}}","Transactions":"Транзакции","Type":"Тип","Unconfirmed":"Нет подтверждений","Unconfirmed Transaction!":"Неподтвержденная транзакция!","Unconfirmed Txs Balance":"Баланс неподтвержденных транзакций","Value Out":"Сумма","Verify":"Проверить","Verify signed message":"Проверить подпись сообщения","Version":"Версия","Waiting for blocks...":"Ожидание блоков...","Waiting for transactions...":"Ожидание транзакций...","What is Komodo?":"What is Komodo?","by date.":"по дате.","first seen at":"первое появление","mined":"дата","mined on:":"дата:"});
/* jshint +W100 */
}]);