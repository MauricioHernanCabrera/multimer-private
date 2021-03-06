<template>
  <button
    class="btn"
    :class="[
      size,
      border,
      defineTheme,
      `${disabled? 'btn--disabled' : ''}`,
      `${icon? 'btn--icon' : ''}`
    ]"
    :type="type"
    @click="$emit('click', $event)"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>

import {
  COLORS_ARRAY,
  TYPES_OF_BUTTONS,
  THEME
} from '~/helpers/const'

export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },

    large: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: 'creme',
      validator: (value) => COLORS_ARRAY.indexOf(value) !== -1
    },

    borderColor: {
      type: String,
      default: 'cloud-3',
      validator: (value) => COLORS_ARRAY.indexOf(value) !== -1
    },

    backgroundColor: {
      type: String,
      default: 'cloud-2',
      validator: (value) => COLORS_ARRAY.indexOf(value) !== -1
    },

    onlyBorderBottom: {
      type: Boolean,
      default: false,
    },

    block: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: 'button',
      validator: (value) => TYPES_OF_BUTTONS.indexOf(value) !== -1
    },

    theme: {
      type: String,
      default: '',
      // validator: (value) => THEME.indexOf(value) !== -1
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    size () {
      if (this.icon) {
        return this.small? 'btn--icon-small' : this.large? 'btn--icon-large' : ''
      } else {
        return this.block? 'btn--block' : this.small? 'btn--small' : this.large? 'btn--large' : ''
      }
    },

    border () {
      return this.onlyBorderBottom? 'btn--only-border-bottom' : ''
    },

    defineTheme () {
      return this.theme? `theme theme-${this.theme}` : `color-${this.color} bg-${this.backgroundColor} bc-${this.borderColor}`
    }
  },
}
</script>

<style scoped>
.btn {
  outline: 0;
  user-select: none;
  font-weight: 700;
  font-family: var(--font-family);
  transition: 0s ease;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  border-bottom-width: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 36px;
  padding: 0 16px;
  font-size: 14px;

  text-decoration: none;
}

.btn:active {
  border-bottom-width: 2px;
  transform: translateY(2px);
}

.btn--small {
  font-size: 13px;
  height: 28px;
  padding: 0 8px;
}

.btn--large {
  font-size: 15px;
  height: 44px;
  padding: 0 32px;
}

.btn--block {
  width: 100%;
}

.btn--icon {
  padding: 0;
  height: 52px;
  width: 52px;
}

.btn--icon-small {
  font-size: 13px;
  height: 44px;
  width: 44px;
}

.btn--icon-large {
  font-size: 15px;
  height: 60px;
  width: 60px;
}

.btn--only-border-bottom {
  border-left: 0;
  border-top: 0;
  border-right: 0;
}
.btn--only-border-bottom:active {
  border-bottom-width: 0px;
  transform: translateY(4px);
}

.btn--icon {
  border-radius: 50%;
}

.btn--disabled {
  cursor: not-allowed;
  border-color: var(--color-cloud-3);
  background-color: var(--color-cloud-2);
  color: var(--color-creme);
}
</style>
