<template>
  <div class="wapper"
       @click="isopen=false">
    <!-- 表头 -->
    <p class="head">
      <span class="head-content">附表1-2</span>
      <span class="head-1">
        <input type="text"
               class="inp" />县（市、区）灌区取用水台账表
      </span>
    </p>
    <table>
      <!-- 以下是表格内容 -->
      <tbody>
        <tr>
          <th colspan="7"
              class="content">
            1.灌溉用水户名称
            <input type="text"
                   class="con-1"
                   v-model="formData.IRR_WU_NM"
                   :disabled="disabled" />
          </th>
          <th colspan="6"
              class="content">
            2.所在地区
            <input type="text"
                   class="con-2"
                   :disabled="disabled" />地（市、州）
            <input type="text"
                   class="con-2"
                   :disabled="disabled" />地（市、区）
            <input type="text"
                   class="con-2"
                   :disabled="disabled" />乡（镇）
          </th>
        </tr>
        <tr>
          <th colspan="7"
              class="content">
            3.所属水资源三级分区：
            <input type="text"
                   class="con-1"
                   v-model="formData.WRCS_NM" />
          </th>
          <th colspan="6"
              class="content">
            4.灌区规模类型：
            <el-radio-group v-model="radio">
              <el-radio :label="3">大型灌区</el-radio>
              <el-radio :label="6">中型灌区</el-radio>
              <el-radio :label="9">小型灌区</el-radio>
            </el-radio-group>
          </th>
        </tr>
        <tr>
          <th colspan="5"
              class="content">
            设计灌溉面积（万亩）：
            <input type="text"
                   class="con-3"
                   v-model="formData.DESIGN_AREA" />
          </th>
          <th colspan="4"
              class="content">
            有效灌溉面积（万亩）：
            <input type="text"
                   class="con-3"
                   v-model="formData.EFF_AREA" />
          </th>
          <th colspan="4"
              class="content">
            耕地实际灌溉面积（万亩）：
            <input type="text"
                   class="con-3"
                   v-model="formData.FAR_IRR_WU" />
          </th>
        </tr>
        <tr>
          <th colspan="5"
              class="content">
            林地实际灌溉面积（万亩）：
            <input type="text"
                   class="con-3"
                   v-model="formData.WOO_IRR_WU" />
          </th>
          <th colspan="4"
              class="content">
            园地实际灌溉面积（万亩）：
            <input type="text"
                   class="con-3"
                   v-model="formData.GARD_IRR_WU" />
          </th>
          <th colspan="4"
              class="content">
            牧草地实际灌溉面积（万亩）：
            <input type="text"
                   class="con-3"
                   v-model="formData.GRAS_IRR_WU" />
          </th>
        </tr>
        <tr>
          <th rowspan="2">时期</th>
          <th colspan="4">5.水源取水量（万m3)</th>
          <th rowspan="2">6.弃水量（万m3)</th>
          <th rowspan="2">7.非灌溉用水量（万m3)</th>
          <th colspan="6">8.灌溉用水量（万m3)</th>
        </tr>
        <tr>
          <th>地表水</th>
          <th>地下水</th>
          <th>其他</th>
          <th>合计</th>
          <th>8.1耕地灌溉用水量</th>
          <th>8.2林地灌溉用水量</th>
          <th>8.3园地灌溉用水量</th>
          <th>8.4牧草地灌溉用水量</th>
          <th>8.5合计</th>
          <th>上年同期</th>
        </tr>
        <tr v-for="(item,index) in form"
            :key="index">
          <th v-if="item.SEASON==1">一季度</th>
          <th v-if="item.SEASON==2">二季度</th>
          <th v-if="item.SEASON==3">三季度</th>
          <th v-if="item.SEASON==4">四季度</th>
          <!-- 以下是填写内容区域 -->
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.SW_WW" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.GW_WW" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.OT_WW" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.sun" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.AB_W" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.NON_IRR_W" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.FAR_IRR_WUW" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.WOO_IRR_WUW" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.GARD_IRR_WUW" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.GRAS_IRR_WUW" />
          </th>
          <th>
            <input type="text"
                   class="con-4"
                   v-model="item.sun1" />
          </th>
          <th>
            <input type="text"
                   class="con-4" />
          </th>
        </tr>
        <tr>
          <th>
            全年
          </th>
          <th>
            <input type="text"
                   class="con-4" />
          </th>
          <th>
            <input type="text"
                   class="con-4" />
          </th>
          <th>
            <input type="text"
                   class="con-4" />
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
          <th>
            <input type="text"
                   class="con-4">
          </th>
        </tr>
      </tbody>
    </table>
    <!-- 表尾 -->
    <div class="foot">
      <span>
        填表人：
        <input type="text"
               class="inp-1" />
      </span>
      <span>
        联系电话：
        <input type="text"
               class="inp-1" />
      </span>
      <span>
        填写日期：
        <input type="text"
               class="inp-2" />年
        <input type="text"
               class="inp-2" />月
        <input type="text"
               class="inp-2" />日
      </span>
      <br />
      <span>
        审核人：
        <input type="text"
               class="inp-1 in" />
      </span>
      <span>
        联系电话：
        <input type="text"
               class="inp-1" />
      </span>
      <span>
        审核日期：
        <input type="text"
               class="inp-2" />年
        <input type="text"
               class="inp-2" />月
        <input type="text"
               class="inp-2" />日
      </span>
      <br />
    </div>
    <!-- 说明按钮，点击按钮后弹出说明框 -->
    <button @click.stop="showway">说明</button>
    <div v-if="isopen"
         class="introduce">
      <p>
        【1.灌溉用水户名称】灌溉用水户主要包括国家、集体、企业、个人所建大中小型灌区，
        灌溉用水户名称即灌区名称，按照灌区日常运行管理的现行名称填写。如没有灌区名称，以
        灌区水源工程名称作为灌区的名称；或以所在乡镇、村组名称作为灌区名称。
      </p>
      <p>【2.所在地区】填写灌溉用水户灌溉范围所在的县级、市（州）。</p>
      <p>
        【3. 所属水资源三级区名称】在水资源三级区中选择一个。如果涉及跨水资源三级
        区的灌区，在备注中注明。全省水资源三级区共 16 个，具体名称如下：黄河河源至玛
        曲、直门达至石鼓、雅砻江、石鼓以下干流、大渡河、青衣江和岷江干流、沱江、嘉陵
        江广元昭化以上、涪江、渠江、嘉陵江广元昭化以下干流、赤水河、长江宜宾至宜昌干
        流、丹江口以上、大夏河与洮河、通天河。
      </p>
      <p>
        【4.灌区规模类型】按照灌溉用水户的设计灌溉面积大小填写，大于 30 万亩的为大型
        灌区，1-30 万亩的为中型灌区，小于 1 万亩的为小型灌区。
      </p>
      <p>【6.弃水量】指灌溉用水户由于防洪、排涝、工程事故等未经过灌溉过程的渠道弃水量。</p>
      <p>
        【7.非灌溉用水量】指从水源取用的用于非灌溉的水量，包括城乡生活用水、工业用水、
        渔塘补水、畜禽用水等水量。
      </p>
      <p>【8.灌溉用水量】指全年从水源取用的用于耕地、林地、园地、牧草地的灌溉水量之和。</p>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.Path, this.paramsData);
    // 判断如果flag=update的话，用户是可以进行编辑的，如果不是=update,则为不可编辑状态
    if ((this.paramsData.flag = "update")) {
      this.disabled = true;
    }
    this.getDate1();
    this.getDate();
  },

  // computed:{
  //   sun(){
  //     return this.form.SW_WW+this.form.GW_WW+this.form.OT_WW;
  //   }
  // },
  mounted () { },
  props: {
    Path: {
      type: Object,
      require: true
    },
    paramsData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      radio: 3,
      isopen: false,
      value: "",
      options: [],
      // 上部分
      formData: {
        IRR_WU_CD: "",
        IRR_WU_NM: "",
        YR: "",
        AD_NM: "",
        AD_CD: "",
        WRCS_NM: "",
        IRR_TYPE: "",
        DESIGN_AREA: "",
        EFF_AREA: "",
        FAR_IRR_WU: "",
        WOO_IRR_WU: "",
        GARD_IRR_WU: "",
        GRAS_IRR_WU: ""
      },
      // 下部分
      form: [
        {
          SW_WW: "",
          GW_WW: "",
          OT_WW: "",
          AB_W: "",
          NON_IRR_W: "",
          FAR_IRR_WUW: "",
          WOO_IRR_WUW: "",
          GARD_IRR_WUW: "",
          GRAS_IRR_WUW: ""
        }
      ],
      flagStatus: "",
      disabled: true
    };
  },
  methods: {
    // 说明按钮
    showway () {
      this.isopen = !this.isopen;
    },
    selectChange (val) {
      console.log(val);
    },
    //获取数据
    getDate () {
      // 声明对象，传给后端
      let param = {
        YR: 2019,
        IRR_WU_CD: this.paramsData.IRR_WU_CD,
        value: this.paramsData.TAB_NM
      };
      this.$http({
        // Path.ledger_gl_getInfo接口名  INFO是表格上部分需要添加的
        url: this.$http.adornUrl(this.Path.ledger_gl_getInfo + "INFO"),
        data: param,
        method: "post"
      }).then(data => {
        this.formData = data.data[0];
      });
    },
    // 获取表格数据
    getDate1 () {
      let param = {
        YR: 2019,
        IRR_WU_CD: this.paramsData.IRR_WU_CD,
        value: this.paramsData.TAB_NM
      };
      this.$http({
        // // Path.ledger_gl_getInfo接口名  TZ是表格下半部分需要添加的台账
        url: this.$http.adornUrl(this.Path.ledger_gl_getInfo + "TZ"),
        data: param,
        method: "post"
      }).then(data => {
        // 通过这一步得到所有渲染的数据,因为是json数组，所以要加上[0]
        this.form = data.data;
        for (let item in this.form) {
          this.form[item]["sun"] =
            parseInt(this.form[item].SW_WW) +
            parseInt(this.form[item].GW_WW) +
            parseInt(this.form[item].OT_WW);
          this.form[item]["sun1"] =
            parseInt(this.form[item].FAR_IRR_WUW) +
            parseInt(this.form[item].WOO_IRR_WUW) +
            parseInt(this.form[item].GARD_IRR_WUW) +
            parseInt(this.form[item].GRAS_IRR_WUW);
        };
        this.sun2 = parseInt(this.form[item].SW_WW) +
      });
    }
  }
};
</script>
<style scoped>
/* 表头样式 */
.wapper {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.wapper .inp {
    height: 30px;
    width: 10%;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    text-align: center;
}

.head {
    font-size: 24px;
    font-weight: bolder;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
}

.head-content {
    font-weight: bolder;
    text-align: center;
    font-size: 24px;
}
.head-1 {
    margin-left: 30px;
}
/* 表格内容样式 */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border: 1px solid black;
    margin: auto;
}

th,
td {
    width: 500px;
    height: 50px;
    border: 1px solid black;
    font-weight: normal;
    text-align: center;
}
.content {
    text-align: left;
    padding-left: 10px;
}
.con-1 {
    height: 20px;
    width: 40%;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    text-align: center;
}
.con-2 {
    height: 20px;
    width: 50px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    text-align: center;
}
.con-3 {
    height: 20px;
    width: 100px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    text-align: center;
}
.con-4 {
    height: 15px;
    width: 40px;
    border: none;
    outline: none;
}
/* 表尾样式 */
.foot {
    margin-left: 15px;
    margin-top: 15px;
}
.inp-1 {
    height: 15px;
    width: 300px;
    border: none;
    outline: none;
}
.inp-2 {
    height: 15px;
    width: 60px;
    border: none;
    outline: none;
    text-align: center;
}
.in {
    margin-top: 20px;
}
/* 跳转按钮样式 */
button {
    width: 30px;
    height: 50px;
    background-color: skyblue;
    position: fixed;
    right: 20px;
    top: 350px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
.introduce {
    width: 300px;
    height: 400px;
    background-color: skyblue;
    position: fixed;
    top: 160px;
    right: 50px;
    border: 1px solid black;
    overflow-y: scroll;
}
</style>
