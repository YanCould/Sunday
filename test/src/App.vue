<template>
<div class="box">
  <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
    <el-tab-pane label="卡片" name="first">
       <el-card  v-for="i in 10"  :key="i"
          :body-style="{ width: width + 'px', padding: '5px' }">
          888
        </el-card>
    </el-tab-pane>

    <el-tab-pane label="列表" name="second">
      <el-table :data="tableData" height="100vh" style="width: 100%">
        <el-table-column prop="sort" label='所属品类' align="center" />
        <el-table-column prop="name" label="项目类别" align="center" />
        <el-table-column prop="pid" label="项目编号" align="center" />
        <el-table-column prop="pname" label="项目名称" align="center" />
        <el-table-column prop="state" label="项目状态" align="center">
          <template #default="scope">
            <div>
              {{scope.row.state==1 ? '进行中':'审批中' }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="projectManager" label="项目经理" align="center" />
        <el-table-column prop="department" label="所属部门" align="center" />
        <el-table-column prop="projectTime" label="项目计划时间" align="center" />
       
      </el-table>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script  setup>
import { ref,onMounted } from 'vue'
// import  { TabsPaneContext } from 'element-plus'
import { getList} from '@/api/list';

const activeName = ref('first')
const tableData = ref([]);

const handleClick = (tab, event) => {
  console.log(tab, event)
}
// 获取列表
const  getData = async ()=>{
    let res = await getList({
        page: page.value,
        limit: limit.value,
     }) 

     console.log('res',res)
     tableData.value = res.data.rows; 
     console.log('tableData.value',tableData.value)
}
onMounted(()=>getData())

//卡片自适应换行开始
const width = ref(0);
change();
window.onresize = change;
function change() {
  let ww = document.documentElement.clientWidth;
  if (ww > 1125) {
    width.value = ww * 0.18;
  } else if (844 < ww && ww < 1125) {
    width.value = ww * 0.24;
  } else if (445 < ww && ww < 844) {
    width.value = ww * 0.35;
  } else if (ww < 445) {
    width.value = ww * 0.80;
  }
}
//卡片自适应换行结束
</script>

<style >
.demo-tabs>.el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-content: center;
}

.box {
  width: 80vw;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin: 5px;
}

#pane-first {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
}
</style>