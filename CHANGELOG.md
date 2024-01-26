# 4.0.0 (2024-01-26)

### 🚀 Features

- only follow `serverUrlPrefix` at redirect to client ([#5295](https://github.com/toeverything/AFFiNE/pull/5295))
- bump blocksuite ([#5386](https://github.com/toeverything/AFFiNE/pull/5386))
- bump blocksuite ([#5575](https://github.com/toeverything/AFFiNE/pull/5575))
- bump blocksuite ([#5720](https://github.com/toeverything/AFFiNE/pull/5720))
- impl unlimited features ([#5659](https://github.com/toeverything/AFFiNE/pull/5659))
- **component:** optimize week-date-picker keyboard navigation ([#5684](https://github.com/toeverything/AFFiNE/pull/5684))
- **core:** add collection and tag filters to all pages ([#5567](https://github.com/toeverything/AFFiNE/pull/5567))

### 🔥 Performance

- **component:** use png instead of svg for rendering noise svg ([#4935](https://github.com/toeverything/AFFiNE/pull/4935))

### 🩹 Fixes

- change password token check ([#4934](https://github.com/toeverything/AFFiNE/pull/4934), [#4932](https://github.com/toeverything/AFFiNE/pull/4932))
- use secure websocket ([#5297](https://github.com/toeverything/AFFiNE/pull/5297))
- use prefix in electron to prevent formdata bug ([#5395](https://github.com/toeverything/AFFiNE/pull/5395))
- use absolute path in gql client ([#5454](https://github.com/toeverything/AFFiNE/pull/5454), [#5462](https://github.com/toeverything/AFFiNE/pull/5462))
- return empty resp if user not exists in login preflight ([#5588](https://github.com/toeverything/AFFiNE/pull/5588))
- consume blob stream correctly ([#5706](https://github.com/toeverything/AFFiNE/pull/5706))
- add padding between editor and link panel ([#5713](https://github.com/toeverything/AFFiNE/pull/5713))
- **component:** fix font display on safari ([#5393](https://github.com/toeverything/AFFiNE/pull/5393))
- **core:** change server url of stable to insider ([#4902](https://github.com/toeverything/AFFiNE/pull/4902))
- **core:** change server url of stable to insider ([075439c74](https://github.com/toeverything/AFFiNE/commit/075439c74))
- **core:** change server url of stable to insider ([#4902](https://github.com/toeverything/AFFiNE/pull/4902), [#4926](https://github.com/toeverything/AFFiNE/pull/4926))
- **core:** handle the getSession network error properly ([#4909](https://github.com/toeverything/AFFiNE/pull/4909))
- **core:** implement editor timeout and report error from boundary ([#5105](https://github.com/toeverything/AFFiNE/pull/5105))
- **core:** expose catched editor load error ([#5133](https://github.com/toeverything/AFFiNE/pull/5133))
- **core:** rerender error boundary when route change and improve sentry report ([#5147](https://github.com/toeverything/AFFiNE/pull/5147))
- **core:** fix flickering workspace list ([#5391](https://github.com/toeverything/AFFiNE/pull/5391))
- **core:** correct title of onboarding article-2 ([#5387](https://github.com/toeverything/AFFiNE/pull/5387))
- **core:** workpace list blink issue on open ([#5400](https://github.com/toeverything/AFFiNE/pull/5400))
- **core:** about setting blink issue ([#5399](https://github.com/toeverything/AFFiNE/pull/5399))
- **core:** trash page footer display issue ([#5402](https://github.com/toeverything/AFFiNE/pull/5402))
- **core:** avatars are not aligned ([#5404](https://github.com/toeverything/AFFiNE/pull/5404))
- **core:** enable page history for beta/stable ([#5415](https://github.com/toeverything/AFFiNE/pull/5415))
- **core:** workspace not found after import ([#5571](https://github.com/toeverything/AFFiNE/pull/5571))
- **core:** bidi links rendering issue ([#5707](https://github.com/toeverything/AFFiNE/pull/5707))
- **core:** journal title's day tag may be invalid ([#5703](https://github.com/toeverything/AFFiNE/pull/5703))
- **electron:** set stable base url to app.affine.pro ([#5401](https://github.com/toeverything/AFFiNE/pull/5401))
- **electron:** remove cors headers hack ([#5581](https://github.com/toeverything/AFFiNE/pull/5581))
- **infra:** compatibility fix for space prefix ([#4912](https://github.com/toeverything/AFFiNE/pull/4912))
- **infra:** workspace migration without blockVersions ([#4936](https://github.com/toeverything/AFFiNE/pull/4936))
- **infra:** page id compat fix for page ids in workspace.meta ([#4950](https://github.com/toeverything/AFFiNE/pull/4950))
- **infra:** use blocksuite api to check compatibility ([#5137](https://github.com/toeverything/AFFiNE/pull/5137))
- **infra:** compatibility logic follow blocksuite ([#5143](https://github.com/toeverything/AFFiNE/pull/5143))
- **server:** increase server acceptable websocket payload size ([42db41776](https://github.com/toeverything/AFFiNE/commit/42db41776))
- **server:** wrap updates applying in a transaction ([#4922](https://github.com/toeverything/AFFiNE/pull/4922))
- **server:** all viewers can share public link ([#4968](https://github.com/toeverything/AFFiNE/pull/4968))
- **server:** wrong OTEL config ([#5084](https://github.com/toeverything/AFFiNE/pull/5084))
- **server:** avoid updates persist forever ([#5258](https://github.com/toeverything/AFFiNE/pull/5258))
- **server:** standalone early access users detection ([#5601](https://github.com/toeverything/AFFiNE/pull/5601))
- **server:** del staled update count cache if unmatch ([#5674](https://github.com/toeverything/AFFiNE/pull/5674))
- **workspace:** filter awareness from other workspace ([#5093](https://github.com/toeverything/AFFiNE/pull/5093))
- **workspace:** fix svg file with xml header ([#5388](https://github.com/toeverything/AFFiNE/pull/5388))

### ❤️ Thank You

- Cats Juice
- DarkSky @darkskygit
- EYHN @EYHN
- forehalo @forehalo
- JimmFly @JimmFly
- Joooye_34 @joooye34
- liuyi @forehalo
- LongYinan
- Peng Xiao
- regischen
- Yifeng Wang
- 李华桥 @joooye34

# 3.0.0 (2024-01-26)

### 🚀 Features

- only follow `serverUrlPrefix` at redirect to client ([#5295](https://github.com/toeverything/AFFiNE/pull/5295))
- bump blocksuite ([#5386](https://github.com/toeverything/AFFiNE/pull/5386))
- bump blocksuite ([#5575](https://github.com/toeverything/AFFiNE/pull/5575))
- bump blocksuite ([#5720](https://github.com/toeverything/AFFiNE/pull/5720))
- impl unlimited features ([#5659](https://github.com/toeverything/AFFiNE/pull/5659))
- **component:** optimize week-date-picker keyboard navigation ([#5684](https://github.com/toeverything/AFFiNE/pull/5684))
- **core:** add collection and tag filters to all pages ([#5567](https://github.com/toeverything/AFFiNE/pull/5567))

### 🔥 Performance

- **component:** use png instead of svg for rendering noise svg ([#4935](https://github.com/toeverything/AFFiNE/pull/4935))

### 🩹 Fixes

- change password token check ([#4934](https://github.com/toeverything/AFFiNE/pull/4934), [#4932](https://github.com/toeverything/AFFiNE/pull/4932))
- use secure websocket ([#5297](https://github.com/toeverything/AFFiNE/pull/5297))
- use prefix in electron to prevent formdata bug ([#5395](https://github.com/toeverything/AFFiNE/pull/5395))
- use absolute path in gql client ([#5454](https://github.com/toeverything/AFFiNE/pull/5454), [#5462](https://github.com/toeverything/AFFiNE/pull/5462))
- return empty resp if user not exists in login preflight ([#5588](https://github.com/toeverything/AFFiNE/pull/5588))
- consume blob stream correctly ([#5706](https://github.com/toeverything/AFFiNE/pull/5706))
- add padding between editor and link panel ([#5713](https://github.com/toeverything/AFFiNE/pull/5713))
- **component:** fix font display on safari ([#5393](https://github.com/toeverything/AFFiNE/pull/5393))
- **core:** change server url of stable to insider ([#4902](https://github.com/toeverything/AFFiNE/pull/4902))
- **core:** change server url of stable to insider ([075439c74](https://github.com/toeverything/AFFiNE/commit/075439c74))
- **core:** change server url of stable to insider ([#4902](https://github.com/toeverything/AFFiNE/pull/4902), [#4926](https://github.com/toeverything/AFFiNE/pull/4926))
- **core:** handle the getSession network error properly ([#4909](https://github.com/toeverything/AFFiNE/pull/4909))
- **core:** implement editor timeout and report error from boundary ([#5105](https://github.com/toeverything/AFFiNE/pull/5105))
- **core:** expose catched editor load error ([#5133](https://github.com/toeverything/AFFiNE/pull/5133))
- **core:** rerender error boundary when route change and improve sentry report ([#5147](https://github.com/toeverything/AFFiNE/pull/5147))
- **core:** fix flickering workspace list ([#5391](https://github.com/toeverything/AFFiNE/pull/5391))
- **core:** correct title of onboarding article-2 ([#5387](https://github.com/toeverything/AFFiNE/pull/5387))
- **core:** workpace list blink issue on open ([#5400](https://github.com/toeverything/AFFiNE/pull/5400))
- **core:** about setting blink issue ([#5399](https://github.com/toeverything/AFFiNE/pull/5399))
- **core:** trash page footer display issue ([#5402](https://github.com/toeverything/AFFiNE/pull/5402))
- **core:** avatars are not aligned ([#5404](https://github.com/toeverything/AFFiNE/pull/5404))
- **core:** enable page history for beta/stable ([#5415](https://github.com/toeverything/AFFiNE/pull/5415))
- **core:** workspace not found after import ([#5571](https://github.com/toeverything/AFFiNE/pull/5571))
- **core:** bidi links rendering issue ([#5707](https://github.com/toeverything/AFFiNE/pull/5707))
- **core:** journal title's day tag may be invalid ([#5703](https://github.com/toeverything/AFFiNE/pull/5703))
- **electron:** set stable base url to app.affine.pro ([#5401](https://github.com/toeverything/AFFiNE/pull/5401))
- **electron:** remove cors headers hack ([#5581](https://github.com/toeverything/AFFiNE/pull/5581))
- **infra:** compatibility fix for space prefix ([#4912](https://github.com/toeverything/AFFiNE/pull/4912))
- **infra:** workspace migration without blockVersions ([#4936](https://github.com/toeverything/AFFiNE/pull/4936))
- **infra:** page id compat fix for page ids in workspace.meta ([#4950](https://github.com/toeverything/AFFiNE/pull/4950))
- **infra:** use blocksuite api to check compatibility ([#5137](https://github.com/toeverything/AFFiNE/pull/5137))
- **infra:** compatibility logic follow blocksuite ([#5143](https://github.com/toeverything/AFFiNE/pull/5143))
- **server:** increase server acceptable websocket payload size ([42db41776](https://github.com/toeverything/AFFiNE/commit/42db41776))
- **server:** wrap updates applying in a transaction ([#4922](https://github.com/toeverything/AFFiNE/pull/4922))
- **server:** all viewers can share public link ([#4968](https://github.com/toeverything/AFFiNE/pull/4968))
- **server:** wrong OTEL config ([#5084](https://github.com/toeverything/AFFiNE/pull/5084))
- **server:** avoid updates persist forever ([#5258](https://github.com/toeverything/AFFiNE/pull/5258))
- **server:** standalone early access users detection ([#5601](https://github.com/toeverything/AFFiNE/pull/5601))
- **server:** del staled update count cache if unmatch ([#5674](https://github.com/toeverything/AFFiNE/pull/5674))
- **workspace:** filter awareness from other workspace ([#5093](https://github.com/toeverything/AFFiNE/pull/5093))
- **workspace:** fix svg file with xml header ([#5388](https://github.com/toeverything/AFFiNE/pull/5388))

### ❤️ Thank You

- Cats Juice
- DarkSky @darkskygit
- EYHN @EYHN
- forehalo @forehalo
- JimmFly @JimmFly
- Joooye_34 @joooye34
- liuyi @forehalo
- LongYinan
- Peng Xiao
- regischen
- Yifeng Wang
- 李华桥 @joooye34

# 2.0.0 (2024-01-26)

### 🚀 Features

- only follow `serverUrlPrefix` at redirect to client ([#5295](https://github.com/toeverything/AFFiNE/pull/5295))
- bump blocksuite ([#5386](https://github.com/toeverything/AFFiNE/pull/5386))
- bump blocksuite ([#5575](https://github.com/toeverything/AFFiNE/pull/5575))
- bump blocksuite ([#5720](https://github.com/toeverything/AFFiNE/pull/5720))
- impl unlimited features ([#5659](https://github.com/toeverything/AFFiNE/pull/5659))
- **component:** optimize week-date-picker keyboard navigation ([#5684](https://github.com/toeverything/AFFiNE/pull/5684))
- **core:** add collection and tag filters to all pages ([#5567](https://github.com/toeverything/AFFiNE/pull/5567))

### 🔥 Performance

- **component:** use png instead of svg for rendering noise svg ([#4935](https://github.com/toeverything/AFFiNE/pull/4935))

### 🩹 Fixes

- change password token check ([#4934](https://github.com/toeverything/AFFiNE/pull/4934), [#4932](https://github.com/toeverything/AFFiNE/pull/4932))
- use secure websocket ([#5297](https://github.com/toeverything/AFFiNE/pull/5297))
- use prefix in electron to prevent formdata bug ([#5395](https://github.com/toeverything/AFFiNE/pull/5395))
- use absolute path in gql client ([#5454](https://github.com/toeverything/AFFiNE/pull/5454), [#5462](https://github.com/toeverything/AFFiNE/pull/5462))
- return empty resp if user not exists in login preflight ([#5588](https://github.com/toeverything/AFFiNE/pull/5588))
- consume blob stream correctly ([#5706](https://github.com/toeverything/AFFiNE/pull/5706))
- add padding between editor and link panel ([#5713](https://github.com/toeverything/AFFiNE/pull/5713))
- **component:** fix font display on safari ([#5393](https://github.com/toeverything/AFFiNE/pull/5393))
- **core:** change server url of stable to insider ([#4902](https://github.com/toeverything/AFFiNE/pull/4902))
- **core:** change server url of stable to insider ([075439c74](https://github.com/toeverything/AFFiNE/commit/075439c74))
- **core:** change server url of stable to insider ([#4902](https://github.com/toeverything/AFFiNE/pull/4902), [#4926](https://github.com/toeverything/AFFiNE/pull/4926))
- **core:** handle the getSession network error properly ([#4909](https://github.com/toeverything/AFFiNE/pull/4909))
- **core:** implement editor timeout and report error from boundary ([#5105](https://github.com/toeverything/AFFiNE/pull/5105))
- **core:** expose catched editor load error ([#5133](https://github.com/toeverything/AFFiNE/pull/5133))
- **core:** rerender error boundary when route change and improve sentry report ([#5147](https://github.com/toeverything/AFFiNE/pull/5147))
- **core:** fix flickering workspace list ([#5391](https://github.com/toeverything/AFFiNE/pull/5391))
- **core:** correct title of onboarding article-2 ([#5387](https://github.com/toeverything/AFFiNE/pull/5387))
- **core:** workpace list blink issue on open ([#5400](https://github.com/toeverything/AFFiNE/pull/5400))
- **core:** about setting blink issue ([#5399](https://github.com/toeverything/AFFiNE/pull/5399))
- **core:** trash page footer display issue ([#5402](https://github.com/toeverything/AFFiNE/pull/5402))
- **core:** avatars are not aligned ([#5404](https://github.com/toeverything/AFFiNE/pull/5404))
- **core:** enable page history for beta/stable ([#5415](https://github.com/toeverything/AFFiNE/pull/5415))
- **core:** workspace not found after import ([#5571](https://github.com/toeverything/AFFiNE/pull/5571))
- **core:** bidi links rendering issue ([#5707](https://github.com/toeverything/AFFiNE/pull/5707))
- **core:** journal title's day tag may be invalid ([#5703](https://github.com/toeverything/AFFiNE/pull/5703))
- **electron:** set stable base url to app.affine.pro ([#5401](https://github.com/toeverything/AFFiNE/pull/5401))
- **electron:** remove cors headers hack ([#5581](https://github.com/toeverything/AFFiNE/pull/5581))
- **infra:** compatibility fix for space prefix ([#4912](https://github.com/toeverything/AFFiNE/pull/4912))
- **infra:** workspace migration without blockVersions ([#4936](https://github.com/toeverything/AFFiNE/pull/4936))
- **infra:** page id compat fix for page ids in workspace.meta ([#4950](https://github.com/toeverything/AFFiNE/pull/4950))
- **infra:** use blocksuite api to check compatibility ([#5137](https://github.com/toeverything/AFFiNE/pull/5137))
- **infra:** compatibility logic follow blocksuite ([#5143](https://github.com/toeverything/AFFiNE/pull/5143))
- **server:** increase server acceptable websocket payload size ([42db41776](https://github.com/toeverything/AFFiNE/commit/42db41776))
- **server:** wrap updates applying in a transaction ([#4922](https://github.com/toeverything/AFFiNE/pull/4922))
- **server:** all viewers can share public link ([#4968](https://github.com/toeverything/AFFiNE/pull/4968))
- **server:** wrong OTEL config ([#5084](https://github.com/toeverything/AFFiNE/pull/5084))
- **server:** avoid updates persist forever ([#5258](https://github.com/toeverything/AFFiNE/pull/5258))
- **server:** standalone early access users detection ([#5601](https://github.com/toeverything/AFFiNE/pull/5601))
- **server:** del staled update count cache if unmatch ([#5674](https://github.com/toeverything/AFFiNE/pull/5674))
- **workspace:** filter awareness from other workspace ([#5093](https://github.com/toeverything/AFFiNE/pull/5093))
- **workspace:** fix svg file with xml header ([#5388](https://github.com/toeverything/AFFiNE/pull/5388))

### ❤️ Thank You

- Cats Juice
- DarkSky @darkskygit
- EYHN @EYHN
- forehalo @forehalo
- JimmFly @JimmFly
- Joooye_34 @joooye34
- liuyi @forehalo
- LongYinan
- Peng Xiao
- regischen
- Yifeng Wang
- 李华桥 @joooye34

# 1.0.0 (2024-01-26)

### 🚀 Features

- only follow `serverUrlPrefix` at redirect to client ([#5295](https://github.com/toeverything/AFFiNE/pull/5295))
- bump blocksuite ([#5386](https://github.com/toeverything/AFFiNE/pull/5386))
- bump blocksuite ([#5575](https://github.com/toeverything/AFFiNE/pull/5575))
- bump blocksuite ([#5720](https://github.com/toeverything/AFFiNE/pull/5720))
- impl unlimited features ([#5659](https://github.com/toeverything/AFFiNE/pull/5659))
- **component:** optimize week-date-picker keyboard navigation ([#5684](https://github.com/toeverything/AFFiNE/pull/5684))
- **core:** add collection and tag filters to all pages ([#5567](https://github.com/toeverything/AFFiNE/pull/5567))

### 🔥 Performance

- **component:** use png instead of svg for rendering noise svg ([#4935](https://github.com/toeverything/AFFiNE/pull/4935))

### 🩹 Fixes

- change password token check ([#4934](https://github.com/toeverything/AFFiNE/pull/4934), [#4932](https://github.com/toeverything/AFFiNE/pull/4932))
- use secure websocket ([#5297](https://github.com/toeverything/AFFiNE/pull/5297))
- use prefix in electron to prevent formdata bug ([#5395](https://github.com/toeverything/AFFiNE/pull/5395))
- use absolute path in gql client ([#5454](https://github.com/toeverything/AFFiNE/pull/5454), [#5462](https://github.com/toeverything/AFFiNE/pull/5462))
- return empty resp if user not exists in login preflight ([#5588](https://github.com/toeverything/AFFiNE/pull/5588))
- consume blob stream correctly ([#5706](https://github.com/toeverything/AFFiNE/pull/5706))
- add padding between editor and link panel ([#5713](https://github.com/toeverything/AFFiNE/pull/5713))
- **component:** fix font display on safari ([#5393](https://github.com/toeverything/AFFiNE/pull/5393))
- **core:** change server url of stable to insider ([#4902](https://github.com/toeverything/AFFiNE/pull/4902))
- **core:** change server url of stable to insider ([075439c74](https://github.com/toeverything/AFFiNE/commit/075439c74))
- **core:** change server url of stable to insider ([#4902](https://github.com/toeverything/AFFiNE/pull/4902), [#4926](https://github.com/toeverything/AFFiNE/pull/4926))
- **core:** handle the getSession network error properly ([#4909](https://github.com/toeverything/AFFiNE/pull/4909))
- **core:** implement editor timeout and report error from boundary ([#5105](https://github.com/toeverything/AFFiNE/pull/5105))
- **core:** expose catched editor load error ([#5133](https://github.com/toeverything/AFFiNE/pull/5133))
- **core:** rerender error boundary when route change and improve sentry report ([#5147](https://github.com/toeverything/AFFiNE/pull/5147))
- **core:** fix flickering workspace list ([#5391](https://github.com/toeverything/AFFiNE/pull/5391))
- **core:** correct title of onboarding article-2 ([#5387](https://github.com/toeverything/AFFiNE/pull/5387))
- **core:** workpace list blink issue on open ([#5400](https://github.com/toeverything/AFFiNE/pull/5400))
- **core:** about setting blink issue ([#5399](https://github.com/toeverything/AFFiNE/pull/5399))
- **core:** trash page footer display issue ([#5402](https://github.com/toeverything/AFFiNE/pull/5402))
- **core:** avatars are not aligned ([#5404](https://github.com/toeverything/AFFiNE/pull/5404))
- **core:** enable page history for beta/stable ([#5415](https://github.com/toeverything/AFFiNE/pull/5415))
- **core:** workspace not found after import ([#5571](https://github.com/toeverything/AFFiNE/pull/5571))
- **core:** bidi links rendering issue ([#5707](https://github.com/toeverything/AFFiNE/pull/5707))
- **core:** journal title's day tag may be invalid ([#5703](https://github.com/toeverything/AFFiNE/pull/5703))
- **electron:** set stable base url to app.affine.pro ([#5401](https://github.com/toeverything/AFFiNE/pull/5401))
- **electron:** remove cors headers hack ([#5581](https://github.com/toeverything/AFFiNE/pull/5581))
- **infra:** compatibility fix for space prefix ([#4912](https://github.com/toeverything/AFFiNE/pull/4912))
- **infra:** workspace migration without blockVersions ([#4936](https://github.com/toeverything/AFFiNE/pull/4936))
- **infra:** page id compat fix for page ids in workspace.meta ([#4950](https://github.com/toeverything/AFFiNE/pull/4950))
- **infra:** use blocksuite api to check compatibility ([#5137](https://github.com/toeverything/AFFiNE/pull/5137))
- **infra:** compatibility logic follow blocksuite ([#5143](https://github.com/toeverything/AFFiNE/pull/5143))
- **server:** increase server acceptable websocket payload size ([42db41776](https://github.com/toeverything/AFFiNE/commit/42db41776))
- **server:** wrap updates applying in a transaction ([#4922](https://github.com/toeverything/AFFiNE/pull/4922))
- **server:** all viewers can share public link ([#4968](https://github.com/toeverything/AFFiNE/pull/4968))
- **server:** wrong OTEL config ([#5084](https://github.com/toeverything/AFFiNE/pull/5084))
- **server:** avoid updates persist forever ([#5258](https://github.com/toeverything/AFFiNE/pull/5258))
- **server:** standalone early access users detection ([#5601](https://github.com/toeverything/AFFiNE/pull/5601))
- **server:** del staled update count cache if unmatch ([#5674](https://github.com/toeverything/AFFiNE/pull/5674))
- **workspace:** filter awareness from other workspace ([#5093](https://github.com/toeverything/AFFiNE/pull/5093))
- **workspace:** fix svg file with xml header ([#5388](https://github.com/toeverything/AFFiNE/pull/5388))

### ❤️ Thank You

- Cats Juice
- DarkSky @darkskygit
- EYHN @EYHN
- forehalo @forehalo
- JimmFly @JimmFly
- Joooye_34 @joooye34
- liuyi @forehalo
- LongYinan
- Peng Xiao
- regischen
- Yifeng Wang
- 李华桥 @joooye34

# Changelog

See the [AFFiNE CHANGELOG](https://affine.pro/blog?tag=Release%20Note)

---
