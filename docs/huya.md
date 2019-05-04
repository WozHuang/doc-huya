hyPlayerConfig里面存着播放器的信息：包括了CDN线路，清晰度选择，房间名等等

gameStreamInfoList 里面是直播流的地址，数组中的每一项对应着CDN

使用 `$("script[data-fixed=true]")[3].innerText` 解析
`Function(innerText + ';return hyPlayerConfig;')` 获得内容

|    field    | data     |
| :---------: | -------- |
|   channel   | 77259038 |
| liveChannel | 2692578162 |
| unknown | 11564535147713789952 |
| unknown| 3258167086 |
| unknown | 10057 |
| unknown | A-0-1 |
| iBitRate(码率) | 1200 |

60977369-60977369-261895805651124224-3352979580-10057-A-0-1

73712507-2509643758-10778837865220538368-344449108-10057-A-0-1

#### 从 gameStreamInfoList 播放地址（主要是提供给移动的用）：

码率：使用 `gameLiveInfo.bitRate` 获得默认的清晰度

**HLS（移动端：m3u8）**

	`${d.sHlsUrl}/${d.sStreamName}_${ratio}.${d.sHlsUrlSuffix}?ratio=${ratio}&${d.sHlsAntiCode}`

http://al.hls.huya.com/huyalive/90636-2674128268-11485293456369123328-2675064482-10057-A-0-1_2000.m3u8
http://al.hls.huya.com/huyalive/45076172-2639089046-11334801143801839616-3569124566-10057-A-0-1_2000.m3u8

**FLV（PC端：H5 FLV）**

	`${d.sFlvUrl}/${d.sStreamName}.${d.sFlvUrlSuffix}?ratio=${ratio}&${d.sFlvAntiCode}`

```js
console.log(123);
```

*从u=×××的后面不需要，估计是用来做流量统计的*

https://al.flv.huya.com/huyalive/90636-2674128268-11485293456369123328-2675064482-10057-A-0-1.flv?wsSecret=397f55a914a1f5eb2fd6ee2478d8595b&wsTime=5cbb662b&ratio=1200&u=129845421873&t=100&sv=1904131122
                                              
**P2P（暂时还不会用）**
https://ws.p2p.huya.com/huyalive/45076172-2639089046-11334801143801839616-3569124566-10057-A-0-1_420_0_66.slice?wsSecret=c66b54a1550afd07cf3e6642ad6c92ab&wsTime=5cbb6e77&ex1=0&baseIndex=5557618136158127&wsRange=0&maxSeq=5557618136158289&maxSeqTime=03:10:19.682&timeStamp=2019-04-21_03:10:19.683&u=257129487691&t=100&sv=1904131122

#### 后面的推荐视频
http://v-api-player-ssl.huya.com/index.php?r=vhuyamulti/simpleVideoList&callback=getVideoListCallback_1227225787&vids=147743165&format=mp4

http://www.huya.com/cache.php?m=VideoSubject&do=ajaxNavVideoSubject&callback=huyaNavVideoSubject

#### 用户信息

https://www.huya.com/udb_web/udbport2.php?m=HuyaHome&do=checkUserNick

https://user.huya.com/user/getUserInfo?callback=jQuery1111008221658049838831_1555943078666&uid=1367559638

#### 广告

http://www.huya.com//cache10min.php?m=Game&do=ajaxNavGame&callback=huyaNavCategory

#### 获取主播喜欢的？

https://liveapi.huya.com/livelist/getUserLikeList?callback=getUserLikeList&pid=1784500555&page=0&pageSize=20&gid=2336&user=1367559638&vExposedUids=1139868818%2C1394575547%2C1394565211&_=1555788549762

#### 分类推荐

https://www.huya.com//cache10min.php?m=Game&do=ajaxNavGame&callback=huyaNavCategory

#### 上面搜索框的关键词

https://www.huya.com/cache10min.php?m=Search&do=getHotword&v=2&callback=jQuery1111017088423034690892_1555939153272

#### 上面的赛事

https://www.huya.com/cache.php?m=Nav&do=ajaxGetHotMatch&callback=huyaNavHotMatch

#### 上面的视频

https://www.huya.com/cache.php?m=VideoSubject&do=ajaxNavVideoSubject&callback=huyaNavVideoSubject

#### 直播间初始弹幕

https://www.huya.com/cache1min.php?m=chatMessage&tid=94525224&sid=2460685313

#### 房间周贡榜

https://www.huya.com/cache5min.php?m=WeekRank&do=getItemsByPid&pid=1394575534

#### 房间粉丝榜

https://www.huya.com/cache.php?m=Fans&do=getFansScoreUpList&profileUid=1394575534

#### 房间贵宾席

https://www.huya.com/cache1min.php?m=VipBarList&tid=94525224&sid=2460685313

#### 应该是获取推荐手机游戏的

https://www.huya.com/cache.php?m=MobileGameApi&do=getWebMobileGameInfo&gameId=2135&pid=1394575534

#### 弹幕上面的活动

https://www.huya.com/cache10min.php?m=PResource&do=ajaxGetPResource&type=4&area=14&num=1

#### 下面的相关视频

https://www.huya.com/cache.php?m=VideoSubject&do=ajaxNavVideoSubject&callback=huyaNavVideoSubject

#### 获取相关视频的链接

https://v-api-player-ssl.huya.com/index.php?r=vhuyamulti/simpleVideoList&callback=getVideoListCallback_979536281&vids=149120215%2C148343897&format=mp4

#### 获得相关视频的评论

https://liveapi.huya.com/moment/getCommentList?callback=jQuery111105429638677087536_1555942319191&uid=1367559638&parentId=6682297830399340559&momId=6682297830399340559&lastComId=0&isGetHotComment=1&_=1555942319196

#### 获得用户关注的

https://fw.huya.com/dispatch?do=subscribeList&uid=1367559638&page=1&pageSize=7&callback=jQuery111105429638677087536_1555942319190&_=1555942319200

#### 用户历史记录

https://fw.huya.com/dispatch?callback=jQuery111105429638677087536_1555942319190&do=userHistory&uid=1367559638&guid=b73e69ac42acba5c662ea9fdaafd4257&token=&page=1&pageSize=5

#### 热门动态

https://liveapi.huya.com/moment/getHotRecMomentListForWeb?callback=jQuery111105429638677087536_1555942319191&uid=1367559638&pageNumber=0&_=1555942319195

#### 是否已经订阅了直播间

https://api.huya.com/subscribe/getSubscribeStatus?callback=jQuery1111008221658049838831_1555943078666&from_key=1367559638&from_type=1&to_key=1394575534&to_type=2&_=1555943078667

#### 还不知道是什么的

http://www.huya.com//cache10min.php?m=Search&do=getHotword&v=2&callback=huyaNavPlaceholder

https://l.web.huya.com/index.php?m=HuyaWeb&do=check&callback=data

https://liveapi.huya.com/moment/getWebMomentListByGame?callback=jQuery111101081236789331419_1555788549758&uid=1367559638&gameId=2336&freeFlowFlag=0&_=1555788549761

