import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import { nextTick, type ComponentPublicInstance } from "vue";
import TaskList from "./TaskList.vue";
import { useTaskStore } from "@/entities/task";
import { setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";

let component: VueWrapper<ComponentPublicInstance>;
let taskStore: ReturnType<typeof useTaskStore>;
beforeEach(() => {
  const pinia = createTestingPinia({ stubActions: false });
  setActivePinia(pinia);
  component = mount(TaskList, {
    plugins: [pinia],
  });
  taskStore = useTaskStore();
});
describe("TaskList tests", () => {
  it("render test", () => {
    const wrapper = component;
    expect(wrapper.exists()).toBe(true);
  });

  it("desplaying test", async () => {
    taskStore.add({title:"test ", description:"description", status:'todo'})
        console.log(taskStore.tasks)
        await nextTick()
        const elem = component.find('tbody>tr')
        console.log(elem.text())
       expect(elem.text()).toContain('test')
  })
});
