import { groupConversations } from './index'

export function generateDemoData() {
  const conversations = [
    {
      address: '+8613800138000',
      name: '异地的TA',
      messages: [
        { id: '1', body: '醒来第一件事就是想你', date: Date.now() - 86400000 * 60 + 3600000 * 8, type: 2, isSent: true, isReceived: false },
        { id: '2', body: '我也想你，宝贝，早上好呀', date: Date.now() - 86400000 * 60 + 3600000 * 8 + 300000, type: 1, isSent: false, isReceived: true },
        { id: '3', body: '今天也好想你，你在干嘛呢', date: Date.now() - 86400000 * 55 + 3600000 * 12, type: 2, isSent: true, isReceived: false },
        { id: '4', body: '在开会，偷偷想你', date: Date.now() - 86400000 * 55 + 3600000 * 12 + 600000, type: 1, isSent: false, isReceived: true },
        { id: '5', body: '想你想你好想你，什么时候才能见面啊', date: Date.now() - 86400000 * 50 + 3600000 * 14, type: 1, isSent: false, isReceived: true },
        { id: '6', body: '下个月就回去了，等着我，我也想你', date: Date.now() - 86400000 * 50 + 3600000 * 14 + 180000, type: 2, isSent: true, isReceived: false },
        { id: '7', body: '晚上睡不着，就是想你', date: Date.now() - 86400000 * 45 + 3600000 * 23, type: 2, isSent: true, isReceived: false },
        { id: '8', body: '我也睡不着，想念你的怀抱', date: Date.now() - 86400000 * 45 + 3600000 * 23 + 120000, type: 1, isSent: false, isReceived: true },
        { id: '9', body: '今天看到一对情侣，突然就好想你', date: Date.now() - 86400000 * 40 + 3600000 * 16, type: 1, isSent: false, isReceived: true },
        { id: '10', body: '傻瓜，我也想你，每天都想', date: Date.now() - 86400000 * 40 + 3600000 * 16 + 90000, type: 2, isSent: true, isReceived: false },
        { id: '11', body: '想念你做的饭，想念你的笑，想念你的一切', date: Date.now() - 86400000 * 35 + 3600000 * 19, type: 2, isSent: true, isReceived: false },
        { id: '12', body: '等你回来，我天天做给你吃，我也想你', date: Date.now() - 86400000 * 35 + 3600000 * 19 + 150000, type: 1, isSent: false, isReceived: true },
      ]
    },
    {
      address: '+8613900139000',
      name: '晚安伴侣',
      messages: [
        { id: '101', body: '晚安，亲爱的，梦里见', date: Date.now() - 86400000 * 30 + 3600000 * 23, type: 2, isSent: true, isReceived: false },
        { id: '102', body: '晚安呀宝贝，祝你做个好梦', date: Date.now() - 86400000 * 30 + 3600000 * 23 + 60000, type: 1, isSent: false, isReceived: true },
        { id: '103', body: '今天好累，先睡了，晚安', date: Date.now() - 86400000 * 29 + 3600000 * 23 + 30, type: 2, isSent: true, isReceived: false },
        { id: '104', body: '晚安，好好休息，明天见', date: Date.now() - 86400000 * 29 + 3600000 * 23 + 30 + 90000, type: 1, isSent: false, isReceived: true },
        { id: '105', body: '晚安晚安晚安，重要的事说三遍', date: Date.now() - 86400000 * 28 + 3600000 * 22, type: 1, isSent: false, isReceived: true },
        { id: '106', body: '晚安我的小笨蛋，梦里要有我哦', date: Date.now() - 86400000 * 28 + 3600000 * 22 + 45000, type: 2, isSent: true, isReceived: false },
        { id: '107', body: '睡不着，但还是想跟你说晚安', date: Date.now() - 86400000 * 27 + 3600000 * 23 + 30, type: 2, isSent: true, isReceived: false },
        { id: '108', body: '怎么了呀？晚安，想你想的睡不着吗', date: Date.now() - 86400000 * 27 + 3600000 * 23 + 30 + 60000, type: 1, isSent: false, isReceived: true },
        { id: '109', body: '又是想你的夜晚，晚安', date: Date.now() - 86400000 * 26 + 3600000 * 23, type: 1, isSent: false, isReceived: true },
        { id: '110', body: '晚安，明天就能见到你啦', date: Date.now() - 86400000 * 26 + 3600000 * 23 + 70000, type: 2, isSent: true, isReceived: false },
        { id: '111', body: '晚安，盖好被子别着凉了', date: Date.now() - 86400000 * 25 + 3600000 * 22 + 30, type: 2, isSent: true, isReceived: false },
        { id: '112', body: '知道啦，你也是，晚安晚安 🌙', date: Date.now() - 86400000 * 25 + 3600000 * 22 + 30 + 100000, type: 1, isSent: false, isReceived: true },
      ]
    },
    {
      address: '+8613700137000',
      name: '欢喜冤家',
      messages: [
        { id: '201', body: '你能不能别这么笨！', date: Date.now() - 86400000 * 20 + 3600000 * 10, type: 1, isSent: false, isReceived: true },
        { id: '202', body: '我怎么笨了？你才笨！', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 30000, type: 2, isSent: true, isReceived: false },
        { id: '203', body: '说谁呢你！找打是吧？', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 60000, type: 1, isSent: false, isReceived: true },
        { id: '204', body: '我说你呢，笨蛋笨蛋大笨蛋！', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 90000, type: 2, isSent: true, isReceived: false },
        { id: '205', body: '你死定了！绝交！', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 120000, type: 1, isSent: false, isReceived: true },
        { id: '206', body: '对不起对不起，我错了，别不理我', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 300000, type: 2, isSent: true, isReceived: false },
        { id: '207', body: '晚了！哼，不理你了', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 360000, type: 1, isSent: false, isReceived: true },
        { id: '208', body: '我请你吃一周的奶茶！原谅我嘛好不好', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 420000, type: 2, isSent: true, isReceived: false },
        { id: '209', body: '两周！', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 480000, type: 1, isSent: false, isReceived: true },
        { id: '210', body: '成交！你最好了！', date: Date.now() - 86400000 * 20 + 3600000 * 10 + 540000, type: 2, isSent: true, isReceived: false },
        { id: '211', body: '哼，算你识相，下次不许气我了', date: Date.now() - 86400000 * 18 + 3600000 * 15, type: 1, isSent: false, isReceived: true },
        { id: '212', body: '我哪里都错了，不该惹你生气的', date: Date.now() - 86400000 * 18 + 3600000 * 15 + 60000, type: 2, isSent: true, isReceived: false },
        { id: '213', body: '你总是这样，说了又不听听了又不做', date: Date.now() - 86400000 * 15 + 3600000 * 11, type: 1, isSent: false, isReceived: true },
        { id: '214', body: '我改我改，消消气嘛宝贝', date: Date.now() - 86400000 * 15 + 3600000 * 11 + 90000, type: 2, isSent: true, isReceived: false },
      ]
    },
    {
      address: '+8613600136000',
      name: '撒娇小宝贝',
      messages: [
        { id: '301', body: '嘤嘤嘤，人家想你了嘛 🥺', date: Date.now() - 86400000 * 12 + 3600000 * 14, type: 1, isSent: false, isReceived: true },
        { id: '302', body: '宝贝乖，我也想你呀', date: Date.now() - 86400000 * 12 + 3600000 * 14 + 60000, type: 2, isSent: true, isReceived: false },
        { id: '303', body: '不要嘛，我就要你现在陪我', date: Date.now() - 86400000 * 10 + 3600000 * 16, type: 1, isSent: false, isReceived: true },
        { id: '304', body: '好好好，宝宝说什么就是什么', date: Date.now() - 86400000 * 10 + 3600000 * 16 + 40000, type: 2, isSent: true, isReceived: false },
        { id: '305', body: '错了嘛，原谅我嘛好不好嘛', date: Date.now() - 86400000 * 8 + 3600000 * 13, type: 1, isSent: false, isReceived: true },
        { id: '306', body: '你说说你哪里错了呀', date: Date.now() - 86400000 * 8 + 3600000 * 13 + 30000, type: 2, isSent: true, isReceived: false },
        { id: '307', body: '人家哪里都错了啦，你就原谅我嘛 😘', date: Date.now() - 86400000 * 8 + 3600000 * 13 + 80000, type: 1, isSent: false, isReceived: true },
        { id: '308', body: '好好好，宝宝这么可爱，当然原谅你啦', date: Date.now() - 86400000 * 8 + 3600000 * 13 + 120000, type: 2, isSent: true, isReceived: false },
        { id: '309', body: '抱抱亲亲举高高嘛 🥰', date: Date.now() - 86400000 * 6 + 3600000 * 20, type: 1, isSent: false, isReceived: true },
        { id: '310', body: '我的小宝贝今天怎么这么黏人呀', date: Date.now() - 86400000 * 6 + 3600000 * 20 + 50000, type: 2, isSent: true, isReceived: false },
        { id: '311', body: '呜呜呜，人家就是想黏着你嘛', date: Date.now() - 86400000 * 6 + 3600000 * 20 + 90000, type: 1, isSent: false, isReceived: true },
        { id: '312', body: '黏吧黏吧，宝贝想怎么黏就怎么黏', date: Date.now() - 86400000 * 6 + 3600000 * 20 + 150000, type: 2, isSent: true, isReceived: false },
        { id: '313', body: '你最好了最好了，最爱你了哟', date: Date.now() - 86400000 * 5 + 3600000 * 17, type: 1, isSent: false, isReceived: true },
        { id: '314', body: '傻瓜，我也最爱你啦', date: Date.now() - 86400000 * 5 + 3600000 * 17 + 45000, type: 2, isSent: true, isReceived: false },
      ]
    }
  ]
  
  const nameMap = {}
  conversations.forEach(c => {
    nameMap[c.address] = c.name
  })
  
  const result = groupConversations(conversations.flatMap(c => 
    c.messages.map(m => ({
      ...m,
      address: c.address,
      threadId: c.address
    }))
  ))
  
  result.forEach(conv => {
    if (nameMap[conv.address]) {
      conv.name = nameMap[conv.address]
    }
  })
  
  return result
}
