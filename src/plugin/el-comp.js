import { ElAlert, ElAside, ElButton, ElSelect, ElRow, ElCol } from 'element-plus';

// 所需的组件
export const components = [ElAlert, ElAside, ElButton, ElSelect, ElRow, ElCol];

// 注册
export default (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
