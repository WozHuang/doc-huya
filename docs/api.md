# API文档

接口字段说明:

|字段|含义|
|:----    |:---|
|statusCode |状态码,"200"表示  |
|data |返回的数据 |
|errorMsg     |错误信息  |



## 获取直播列表

**简要描述：** 

- 获取直播列表

**请求URL：** 
- ` /getLiveList?pageNo=1 `

**请求方式：**
- GET 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pageNo |是  |Number |页数   |

 **返回示例**

```json
{
    "gameFullName": "英雄联盟",
    "gameHostName": "lol",
    "boxDataInfo": null,
    "totalCount": "3353952",
    "roomName": "┊♔ＵＺＩ        直播间♔↚↜↛↚↝↛↛┊",
    "bussType": "1",
    "screenshot": "http://live-cover.msstatic.com/huyalive/67547117-2579323162-11078108626605309952-3383307744-10057-A-0-1/20190504204031.jpg",
    "privateHost": "uzi",
    "nick": "Uzi",
    "avatar180": "https://huyaimg.msstatic.com/avatar/1048/57/c520ca01e7a02975e7e5d96f432cff_180_135.jpg",
    "gid": "1",
    "introduction": "中野联动 不服就送",
    "recommendStatus": "545",
    "recommendTagName": "超级明星",
    "isBluRay": "1",
    "bluRayMBitRate": "8M",
    "screenType": "1",
    "liveSourceType": "8",
    "uid": "1691592144",
    "channel": "67547117",
    "liveChannel": "2579323162",
    "imgRecInfo": null,
    "aliveNum": "0",
    "attribute": null,
    "profileRoom": "666888",
    "isRoomPay": 0,
    "roomPayTag": ""
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----|:-----|-----|
|gameFullName|String|分类名|
|gameHostName|String|分类对应的英文id|
|boxDataInfo|String|---|
|totalCount|String|人气|
|roomName|String|房间名|
|bussType|String|---|
|screenshot|String|当前屏幕预览图|
|privateHost|String|个人host(二级地址)|
|nick|String|用户昵称|
|avatar180|String|用户头像|
|gid|String|---|
|introduction|String|直播间标题|
|recommendStatus|String|推荐状态(不知道干嘛的)|
|recommendTagName|String|推荐标签名|
|isBluRay|String|是否蓝光|
|bluRayMBitRate|String|蓝光码率|
|screenType|String|---|
|liveSourceType|String| --- |
|uid|String| 用户id? |
|channel|String| --- |
|liveChannel|String| --- |
|imgRecInfo|String| 唱歌中、跳舞中、击杀人数(在屏幕右上角的信息) |
|aliveNum|String| 存活人数(绝地求生相关) |
|attribute|String| 上电视相关(应该是配置的一个属性,把图标显示出来就可以了) |
|profileRoom|String| 房间号(上面的privateHost是别名,尽量不用) |
|isRoomPay|String| --- |
|roomPayTag|String| --- |

 **备注** 

- screenshot加上后缀 `?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,webp/quality,q_90`能够取到`338x190`的小图

## 获取直播详情

**简要描述：** 

- 获取直播详情

**请求URL：** 
- ` /getLiveDetail?host=uzi `

**请求方式：**
- GET 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|host |是  |String |房间号(profileRoom)或别称(privateHost,尽量不用)   |

 **返回示例**
```json
{}
```
 **返回参数说明** 

 **TT_META_DATA**

没有数据

 **TT_PLAYER_CFG**

播放器配置,无用

 **TT_PROFILE_INFO**

主播信息

|参数名|类型|说明|
|:-----|:-----|-----|
|sex|Number|性别,1:男,2:女|
|lp|String|---|
|aid|Number|---|
|yyid|String|---|
|nick|String|昵称|
|avatar|String|头像地址|
|fans|Number|订阅数|
|freezeLevel|String|---|
|host|String|个人host(尽量不用)|
|profileRoom|String|房间id|

 **TT_ROOM_DATA**

房间信息

|参数名|类型|说明|
|:-----|:-----|-----|
|type|String| --- |
|state|String| 当前状态 |
|isOn|Boolean| --- |
|isOff|Boolean| --- |
|isReplay|Boolean| --- |
|isPayRoom|Boolean| --- |
|roomPayPassword|Number| --- |
|id|Number| --- |
|sid|Number| --- |
|channel|Number| --- |
|liveChannel|Number| --- |
|liveId|Number| --- |
|shortChannel|Number| --- |
|isBluRay|String| 蓝光 |
|gameFullName|String|分类名|
|gameHostName|String|分类对应的英文id|
|screenType|Number| --- |
|startTime|Number| 开始直播时间 |
|totalCount|Number| 人气 |
|cameraOpen|Number| --- |
|liveCompatibleFlag|Number| --- |
|bussType|Number| --- |
|isPlatinum|String| --- |
|screenshot|String| 屏幕画面 |
|previewUrl|String| --- |
|gameId|String| --- |
|liveSourceType|Number| --- |
|privateHost|String| 个人host |
|profileRoom|String| 房间id |
|recommendStatus|Number| --- |
|popular|String| --- |
|gid|Number| --- |
|introduction|String| 房间标题 |
|isRedirectHuya|Number| --- |
|isShowMmsProgramList|Boolean| --- |

 **hyPlayerConfig**

直播流相关信息

hyPlayerConfig.stream.data[0].gameLiveInfo: 房间相关信息

|参数名|类型|说明|
|:-----|:-----|-----|
|bitRate|String| 默认的清晰度 |

hyPlayerConfig.stream.data[0].gameStreamInfoList:存放直播流的数组,有多少个元素代表有多少条直播线路

|参数名|类型|说明|
|:-----|:-----|-----|
|sCdnType|String| CDN的名称 |
|iIsMaster|Number| --- |
|lChannelId|Number| --- |
|lSubChannelId|Number| --- |
|lPresenterUid|Number| --- |
|sStreamName|String| 直播流名称 |
|sFlvUrl|String| FLV地址 |
|sFlvUrlSuffix|String| FLV后缀 |
|sFlvAntiCode|String| FLV鉴权码 |
|sHlsUrl|String| HLS地址 |
|sHlsUrlSuffix|String| HLS地址后缀 |
|sHlsAntiCode|String| HLS鉴权码 |
|iLineIndex|String| 线路编号 |
|iIsMultiStream|String| 多码率线路? |
|iPCPriorityRate|String| PC优先级 |
|iWebPriorityRate|String| Web优先级 |
|iMobilePriorityRate|String| 移动端优先级 |
|vFlvIPList|String| --- |
|iIsP2PSupport|String| 支持P2P |
|sP2pUrl|String| P2P地址 |
|sP2pUrlSuffix|String| P2P后缀 |
|sP2pAntiCode|String| P2P鉴权码 |
|lFreeFlag|String| --- |
|newCFlvAntiCode|String| --- |

FLV地址:

```
`${data.sFlvUrl}/${data.sStreamName}.${data.sFlvUrlSuffix}?${data.sFlvAntiCode}` 
```

HLS地址:

```
`${data.sHlsUrl}/${data.sStreamName}.${data.sFlvUrlSuffix}?${data.sFlvAntiCode}`
```

## 获取 websocket 地址

**简要描述：** 

- 获取弹幕、礼物、用户进场信息的websocket地址

**请求URL：** 
- ` /getNotice?host=11342412 `
  
**请求方式：**
- GET 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|host |是  |string | 房间号    |

 **返回示例**
```json
{
  "getMessageNotice": "wss://openapi.huya.com/index.html?do=getMessageNotice&data={\"roomId\":11342412}&appId=155289872835739286&timestamp=1558514640&sign=2f542e3e8692433206bb9cf64d123b87",
  "getSendItemNotice": "wss://openapi.huya.com/index.html?do=getSendItemNotice&data={\"roomId\":11342412}&appId=155289872835739286&timestamp=1558514640&sign=2f542e3e8692433206bb9cf64d123b87",
  "getVipEnterBannerNotice": "wss://openapi.huya.com/index.html?do=getVipEnterBannerNotice&data={\"roomId\":11342412}&appId=155289872835739286&timestamp=1558514640&sign=2f542e3e8692433206bb9cf64d123b87"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|getMessageNotice |string   |普通弹幕接口  |
|getSendItemNotice |string   |礼物接口  |
|getVipEnterBannerNotice |string   |高级用户进场信息接口  |

**备注**

弹幕接口地址示例：

```
wss://openapi.huya.com/index.html?do=getMessageNotice&data={"roomId":11342412}&appId=155289872835739286&timestamp=1558518190&sign=f945881550da4dfc9711115cf0e0ec63
```

消息示例：

```json
{
  badgeName: "楚河"
  content: "我坏嘛"
  fansLevel: 8
  nobleLevel: 0
  roomid: 11342412
  sendNick: "来自二次元的兔子"
  senderAvatarUrl: "https://huyaimg.msstatic.com/avatar/1017/32/d2b290d76febcb8e3d3cb3e7a9289d_180_135.jpg?1534911631"
  senderGender: 1
  showMode: 0
}
```

|参数名|类型|说明|
|:-----  |:-----|-----|
|badgeName |string   |粉丝徽章名称  |
|content |string   |内容  |
|fansLevel |string   |粉丝徽章等级  |
|nobleLevel |string   |---  |
|roomid |string   |---  |
|sendNick |string   |昵称  |
|senderAvatarUrl |string   |头像  |
|senderGender |string   |---  |
|showMode |string   |---  |

注：在内容中会以 `/{dk` 的形式代表 “大哭” 的表情，需要转换成对应的表情，对应的地址是 `https://a.msstatic.com/huya/main/emot_png/dk.png`















## 接口模板

**简要描述：** 

- 用户注册接口

**请求URL：** 
- ` /api/user/register `
  
**请求方式：**
- GET 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|username |是  |string |用户名   |

 **返回示例**
```json
  {
    
  }
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupId |int   |用户组id，1：超级管理员；2：普通用户  |

 **备注** 

- 更多返回错误代码请看开头的错误代码描述
