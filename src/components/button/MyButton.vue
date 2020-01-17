<template>
  <button
    class="but"
    :class="{primary:type==='primary' && !plain && !disabled, default:type==='' && !plain && !disabled,
    success:type==='success' && !plain && !disabled,warning:type==='warning' && !plain && !disabled,
    danger:type==='danger' && !plain && !disabled,info:type==='info' && !plain && !disabled,
    primaryO:type==='primary' && plain && !disabled, defaultO:type==='' && plain && !disabled,
    successO:type==='success' && plain && !disabled,warningO:type==='warning' && plain && !disabled,
    dangerO:type==='danger' && plain && !disabled,infoO:type==='info' && plain && !disabled,round:round,disabled:disabled,
    primaryN:type==='primary' && !plain && disabled, defaultN:type==='' && !plain && disabled,
    successN:type==='success' && !plain && disabled,warningN:type==='warning' && !plain && disabled,
    dangerN:type==='danger' && !plain && disabled,infoN:type==='info' && !plain && disabled,
    primaryNO:type==='primary' && plain && disabled, defaultNO:type==='' && plain && disabled,
    successNO:type==='success' && plain && disabled,warningNO:type==='warning' && plain && disabled,
    dangerNO:type==='danger' && plain && disabled,infoNO:type==='info' && plain && disabled,}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "#fff",
      color: "#606266"
    };
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.but {
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  display: inline-block;
  border: 1px solid #dcdfe6;
  color: #606266;
  cursor: pointer;
  font-weight: 500;
  outline: none;
}
.default:hover {
  border-color: #c6e2ff;
  background-color: #ecf5ff !important;
}
.default:focus {
  border-color: #c6e2ff;
  background-color: #ecf5ff !important;
}
.primary {
  color: #fff;
  background: #409eff;
  border-color: #409eff;
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
  }
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
  }
}
.success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
  }
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
  }
}
.warning {
  color: #fff;
  background: #e6a23c;
  border-color: #e6a23c;
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
  }
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
  }
}
.danger {
  color: #fff;
  background: #f56c6c;
  border-color: #f56c6c;
  &:focus {
    background: #f78989;
    border-color: #f78989;
  }
  &:hover {
    background: #f78989;
    border-color: #f78989;
  }
}
.info {
  color: #fff;
  background: #909399;
  border-color: #909399;
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
  }
  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
  }
}
//朴素
.defaultO:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.defaultO:focus {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.primaryO {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:focus {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
  }
  &:hover {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
  }
}
.successO {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:focus {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  &:hover {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
}
.warningO {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:focus {
    color: #fff;
    background: #e6a23c;
    border-color: #e6a23c;
  }
  &:hover {
    color: #fff;
    background: #e6a23c;
    border-color: #e6a23c;
  }
}
.dangerO {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:focus {
    color: #fff;
    background: #f56c6c;
    border-color: #f56c6c;
  }
  &:hover {
    color: #fff;
    background: #f56c6c;
    border-color: #f56c6c;
  }
}
.infoO {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:focus {
    color: #fff;
    background: #909399;
    border-color: #909399;
  }
  &:hover {
    color: #fff;
    background: #909399;
    border-color: #909399;
  }
}
// 禁用
.defaultN {
  color: #c0c4cc;
  background-color: #fff;
  border-color: #ebeef5;
}
.primaryN {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.successN {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.warningN {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.dangerN {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.infoN {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
//朴素禁用
.defaultNO {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}
.primaryNO {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.successNO {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.warningNO {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.dangerNO {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}
.infoNO {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.round {
  border-radius: 20px;
  padding: 12px 23px;
}
.disabled {
  cursor: not-allowed;
}
.settingBg {
  color: #fff;
  background: #409eff;
  border-color: #409eff;
}
</style>