<template>
    <el-form
        ref='form'
        class='form'
        :model='model'
        :rules='rules'
        label-width='88px'
    >
        <el-form-item
            label='案例描述'
            prop='caseDesc'
        >
            <el-input
                v-model='model.caseDesc'
                placeholder='请输入内容'
                clearable
            />
        </el-form-item>
   
        <el-form-item>
            <el-button
                type='primary'
                @click='submit'
            >
                提交
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
const form = reactive({
    caseDesc:''
});
</script>