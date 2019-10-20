<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper" @click.self="$emit('close')">
                <div class="modal-container">
                    <div class="modal-header" :class="{'modal-header-active': message}">
                        Введите название задачи
                    </div>
                    <div class="modal-body">
                        <input ref="input" type="text" class="modal-input" v-model="newTask">
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button" @click="add">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Modal",
        data() {
            return {
                newTask: '',
                message: false
            }
        },
        methods: {
            add() {
                if (this.newTask.trim()) {
                    this.message = false;
                    this.$emit('add', this.newTask);
                }
                this.message = true;
                this.$refs['input'].focus();
            }
        },
        mounted() {
            this.$refs['input'].focus();
        }
    }
</script>

<style scoped lang="scss">
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        color: #911200;
        opacity: 0;
    }

    .modal-header-active {
        opacity: 1;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-footer {
        text-align: center;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .modal-input {
        width: 100%;
        padding: 5px;
        border: 1px solid #aeaeae;
        border-radius: 5px;
    }

    .modal-default-button {
        width: 100px;
        padding: 5px;
        background-color: #001c37;
        border: 1px solid #001c37;
        border-radius: 5px;
        color: #ffffff;
        font-weight: bold;
        cursor: pointer;
    }
</style>