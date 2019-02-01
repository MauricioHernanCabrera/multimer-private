<template>
  <div class="floating-bar" :class="[
    top? 'floating-bar--top' : '',
    bottom? 'floating-bar--bottom' : '',
    left? 'floating-bar--left' : '',
    right? 'floating-bar--right' : '',
  ]">
    <container
      class="container"
      :class="[
        justifyContent,
        backgroundColor? `bg-${backgroundColor}` : '',
        borderColor? `bc-${borderColor}` : ''
      ]"
    >
      <slot></slot>
    </container>
  </div>
</template>

<script>
import Container from '~/components/Container'

export default {
  props: {
    top: {
      type: Boolean,
      default: false
    },

    bottom: {
      type: Boolean,
      default: true
    },

    left: {
      type: Boolean,
      default: false
    },

    right: {
      type: Boolean,
      default: true
    },

    backgroundColor: {
      type: String,
      default: ''
    },

    borderColor: {
      type: String,
      default: ''
    },

    justifyContentFlexStart: {
      type: Boolean,
      default: false,
    },

    justifyContentFlexEnd: {
      type: Boolean,
      default: false,
    },

    justifyContentCenter: {
      type: Boolean,
      default: false,
    },

    justifyContentSpaceBetween: {
      type: Boolean,
      default: false,
    },

    justifyContentSpaceAround: {
      type: Boolean,
      default: false,
    },

    justifyContentInitial: {
      type: Boolean,
      default: false,
    },
  },

  components: {
   Container
  },

  computed: {
    justifyContent () {
      return this.justifyContentFlexStart? 'justify-content-flex-start' :
              this.justifyContentFlexEnd? 'justify-content-flex-end' :
              this.justifyContentCenter? 'justify-content-center' :
              this.justifyContentSpaceBetween? 'justify-content-space-between' :
              this.justifyContentSpaceAround? 'justify-content-space-around' :
              this.justifyContentInitial? 'justify-content-initial' : 'justify-content-inherit'
    }
  }
}
</script>

<style scoped>
.floating-bar {
  position: fixed;
  display: flex;
  width: 100%;
}

.floating-bar--top {
  top: 0;
}
.floating-bar--bottom {
  bottom: 0;
}
.floating-bar--left {
  left: 0;
}
.floating-bar--right {
  right: 0;
}

.container {
  display: flex;
  border-top-width: 2px;
  border-top-style: solid;
}
</style>
