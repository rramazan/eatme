<template>
    <div class="task">
        <div class="task__title">{{title}}</div>
        <draggable
                class="task__container"
                v-bind="dragOptions"
                :clone="clone"
                @start="drag = true"
                @end="drag = false">
            <transition-group type="transition" tag="div" class="task__list" :name="!drag ? 'flip-list' : null">
                <div
                        class="task__item"
                        v-for="(item, index) in taskList"
                        :key="index">
                    {{ item }}
                </div>
            </transition-group>
        </draggable>
        <button class="task__button" @click="showModal">
            <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 version="1.1" id="Capa_1"
                 x="0px"
                 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 20 20;" xml:space="preserve"
                 width="15px"
                 height="15px">
                <g>
                    <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                          data-original="#000000" class="active-path" data-old_color="#000000" fill="#aeaeae"/>
                </g>
            </svg>
            <span>Add another card</span>
        </button>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';

    export default {
        name: "TaskTemplate",
        props: ['title', 'taskList'],
        data() {
            return {
                drag: false,
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
            }
        },
        methods: {
            showModal() {
                this.$emit('showModal', this.title);
            },
            clone({name}) {
                return {name};
            },
        },
        components: {
            draggable
        },
    }
</script>

<style scoped lang="scss">
    .task {
        display: inline-flex;
        flex-direction: column;
        width: calc(100% / 3 - 10px);
        flex-grow: 2;
        margin: 5px;
        padding: 5px 10px;
        background-color: #f3f3f3;
        box-sizing: border-box;
        border-radius: 5px;

        &__title {
            padding: 10px;
            font-weight: bold;
            color: #001c37;
        }

        &__container {
            flex-grow: 1;
        }

        &__list {
            height: 100%;
        }

        &__item {
            margin-bottom: 10px;
            padding: 10px;
            cursor: move;
            background-color: #fff;
            color: #003a62;
            border-radius: 5px;
        }

        &__button {
            display: inline-flex;
            align-items: center;
            padding: 10px 0;
            cursor: pointer;
            color: #aeaeae;
            border: none;
            background-color: initial;
        }
    }

    .button__icon {
        margin-right: 5px;
    }
    @media only screen and (max-width: 550px) {
        .task {
            width: 100%;
        }
    }
</style>