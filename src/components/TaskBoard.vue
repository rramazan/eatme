<template>
    <div class="container">
        <div class="task__board">
            <task-template
                    @showModal="show"
                    v-for="(item, index) in categoryList"
                    :taskList="item.list"
                    :title="item.name"
                    :key="index">
            </task-template>
            <modal v-if="showModal" @close="showModal = false" @add="addTask"/>
        </div>
    </div>
</template>

<script>
    import Modal from "./Modal";
    import TaskTemplate from "./TaskTemplate";

    export default {
        name: "TaskBoard",
        data() {
            return {
                showModal: false,
                currentTitle: '',
                categoryList: {
                    'To Do': {
                        name: 'To Do',
                        list: ['one', 'two', 'three']
                    },
                    'In Progress': {
                        name: 'In Progress',
                        list: ['one', 'two', 'three']
                    },
                    'Done': {
                        name: 'Done',
                        list: ['one', 'two', 'three']
                    }
                }
            }
        },
        methods: {
            addTask(title) {
                this.categoryList[this.currentTitle].list.push(title);
                this.showModal = false;
            },
            show(title) {
                this.currentTitle = title;
                this.showModal = true;
            }
        },
        components: {
            TaskTemplate,
            Modal
        },
    }
</script>

<style scoped lang="scss">
    .container {
        max-width: 950px;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Segoe, sans-serif;
    }

    .task__board {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
</style>