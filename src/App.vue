<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import { UseFps } from "@/utils/performance"

const { initTheme } = useTheme()

/** 初始化主题 */
initTheme()
const fps = UseFps()
</script>

<template>
  <div style="position: fixed; right: 10px; color: red">FPS:{{ fps }}</div>
  <ElConfigProvider>
    <router-view />
  </ElConfigProvider>
</template>
