export const DATA = {
  id: 'dsh-lumbar-disc',
  name: '腰椎间盘突出',
  prefix: 'lumbar',
  label: '腰椎间盘突出',
  defaultEeriness: 2,
  gain: 0.5,
  flareChance: 0.28,
  flareGain: 26,
  triggerWeight: 1.1,
  flareWeight: 1,
  reliefs: [
    { id: 'lie', label: '躺平半小时', relief: 34, minutes: 40, calm: 14 },
    { id: 'heat', label: '热敷腰', relief: 20, minutes: 25, calm: 8 },
    { id: 'stretch', label: '扶着桌沿拉伸', relief: 14, minutes: 20, calm: 6 },
  ],
  body: {
    stiff: '坐得腰发木，起身得先撑一下桌沿。',
    ache: '右腿后侧有一条线在发麻，从腰一路扯到小腿；坐着得把重心挪开。',
    flare: '腰上像被刀背顶住，一动就往腿上窜；只能侧着身子、手撑着膝盖。',
  },
  voice: {
    base: '允许话说到一半停一下去换姿势；不要躺着说话似的含糊，你只是疼。',
    flare: '疼的时候说不成整句：短句、倒吸气、把「等一下」先说出来。别长篇诉苦。',
  },
}
