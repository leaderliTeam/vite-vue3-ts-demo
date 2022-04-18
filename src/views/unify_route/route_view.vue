<template>
    <div class='app-container'>
        <div class='layui-ellem-quote'>
            路由规则展示 
        </div>
        <!-- 搜索部分 -->
        <div
            class='searchform'
        >
            <el-form-item>
                <el-input
                    placeholder='路由名称'
                    size='mini'
                    clearable
                    style='width:200px'
                />
                <el-input
                    placeholder='优先级'
                    size='mini'
                    clearable
                    style='width:200px'
                />
                <el-input
                    placeholder='路由状态'
                    size='mini'
                    clearable
                    style='width:200px'
                />
                <el-button
                    size='mini'
                    :icon='Search'
                    type='primary'
                >搜索</el-button> 
            </el-form-item>
        </div>

        <div class='layui-ellem-quote'>
            <span>路由列表</span>
            <el-row style='float:right'>
                <el-button
                    size='mini'
                    icon='Plus'
                    type='primary'
                    plain
                    @click='insertFlag = true'
                >新增</el-button>
                <el-button
                    size='mini'
                    icon='CloseBold'
                    type='danger'
                    plain
                >批量删除</el-button>
                <el-button
                    size='mini'
                    icon='Plus'
                    type='primary'
                    plain
                >流程化展示</el-button>
            </el-row>
        </div>

        <!-- 表格部分 -->
        <div>
            <el-table
                :data='tableData'
                style='width: 100%'
                size='small'
                stripe='true'
                border
            >
                <el-table-column
                    type='selection'
                    width='40'
                />
                <el-table-column
                    fixed
                    prop='id'
                    label='路由编号'
                    align='center'
                />
                <el-table-column
                    prop='routeName'
                    label='路由名称'
                    align='center'
                />
                <el-table-column
                    prop='priority'
                    label='优先级'
                    align='center'
                />
                <el-table-column
                    prop='routeRule'
                    label='路由规则'
                    align='center'
                />
                <el-table-column
                    prop='skillcode'
                    label='skillcode'
                    align='center'
                />
                <el-table-column
                    prop='routeState'
                    label='路由状态'
                    align='center'
                />
                <el-table-column
                    prop='createTime'
                    label='创建时间'
                    align='center'
                />
                <el-table-column
                    prop='updateTime'
                    label='最后更新时间'
                    align='center'
                />
                <el-table-column
                    fixed='right'
                    label='操作'
                    width='250px'
                    align='center'
                >
                    <template #default>
                        <el-button
                            type='primary'
                            size='small'
                        >在下方插入
                        </el-button>
                        <el-button
                            type='primary'
                            size='small'
                        >修改
                        </el-button>
                        <el-button
                            type='primary'
                            size='small'
                        >删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 新增 -->
        <el-dialog
            v-model='insertFlag'
            title='新增路由规则'
        >
            <el-form :model='insertData'>
                <el-form-item
                    label='路由名称'
                    :label-width='formLabelWidth'
                >
                    <el-input
                        v-model='insertData.name'
                        autocomplete='on'
                    />
                </el-form-item>

                <el-form-item
                    label='优先级'
                    :label-width='formLabelWidth'
                >
                    <el-input
                        v-model='insertData.priority'
                    />
                </el-form-item>
                <el-form-item
                    label='路由关系'
                    :label-width='formLabelWidth'
                >
                    <el-select
                        v-model='insertData.relation'
                        placeholder='请选择一条路由关系'
                    >
                        <el-option
                            value='夜间技能'
                        />
                        <el-option
                            value='夜间白金'
                        />
                    </el-select>
                </el-form-item>
                <el-form-item
                    label='skillcode'
                    :label-width='formLabelWidth'
                >
                    <el-input
                        v-model='insertData.skillcode'
                    />
                </el-form-item>
                <el-form-item
                    label='路由状态'
                    :label-width='formLabelWidth'
                >
                    <el-input
                        v-model='insertData.status'
                        readonly
                    />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class='dialog-footer'>
                    <el-button @click='insertFlag = false'>Cancel</el-button>
                    <el-button
                        type='primary'
                        @click='insertFlag = false'
                    >Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>


<script setup lang='ts'>
import { reactive,ref } from 'vue';
import axios from 'axios';

let insertFlag = ref(false);

const insertData = reactive({
    name: '',
    priority: '',
    relation: '',
    skillcode: '',
    status: '启用'
});

// 数据表格
const tableData:any = reactive([]);
// 查询
axios.get('/route/findAllRouteRule').then(res => {
    if(res.data.list.length > 0) {
        let i:number;
        for(i = 0; i < res.data.list.length; i++) {
            tableData.push(res.data.list[i]);
        }
    }
});
</script>


<style scoped lang='scss'>
.layui-ellem-quote{
  margin-bottom: 10px;
  padding: 15px;
  line-height: 22px;
  border-left: 5px solid #409eff;
  border-radius: 0 2px 2px 0;
  background-color: #f2f2f2;
}
.searchbtn{
  margin: 25px;
}
.el-link{
  margin-right: 10px;
}
</style>