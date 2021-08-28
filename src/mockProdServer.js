//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
// 逐一导入您的mock.ts文件
// 如果使用vite.mock.config.ts，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
const modulesFiles = import.meta.glob('./server/mock/*.js');

export function setupProdMockServer() {
  createProdMockServer([...modulesFiles]);
}
