import { aliyun } from './aliyun';
import { openai } from './openai';
import { baidu } from './baidu';
import { google } from './google';
import { tencent } from './tencent';
import { yi } from './yi';
import { moonshot } from './moonshot';
import { lepton } from './lepton';
import { deepseek } from './deepseek';
import { chatglm } from './chatglm';
import { local } from './ollama';

const platform = {
  aliyun,
  openai,
  baidu,
  google,
  tencent,
  yi,
  deepseek,
  chatglm,
  moonshot,
  lepton,
  local
};

export default platform;
