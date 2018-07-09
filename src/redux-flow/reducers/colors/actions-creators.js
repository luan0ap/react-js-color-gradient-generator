'use strict'
import { ADD_COLORS } from './actions'
import { v4 } from 'uuid'

export const addColors = () => ({
  type: ADD_COLORS,
  payload: {
    id: v4(),
    color: `#${Math.random().toString(16).slice(2, 8)}`
  }
})