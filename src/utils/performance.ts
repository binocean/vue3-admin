import { Ref, ref } from "vue"

export interface UseFpsOptions {
  /**
   * Calculate frequency of fps
   * @default 10
   */
  frequency?: number
}

export const UseFps = (option?: UseFpsOptions): Ref<number> => {
  const fps = ref(0)

  const frequency = option?.frequency ?? 10
  let pre = performance.now()
  let ticks = 0

  const update = () => {
    ticks += 1
    if (ticks >= frequency) {
      const now = performance.now()
      const diff = now - pre
      fps.value = Math.round(1000 / (diff / ticks))
      pre = now
      ticks = 0
    }

    requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
  return fps
}
