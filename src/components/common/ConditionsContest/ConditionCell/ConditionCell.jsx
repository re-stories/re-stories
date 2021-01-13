import React from 'react'
import css from './ConditionCell.module.css'
import Checkbox from './Checkbox/Checkbox'
import { SimpleCell} from "@vkontakte/vkui";
import {useSelector} from "react-redux";
import _isUndefined from 'lodash/isUndefined'
import {useCheckIsModerator} from "../../../../hooks/hooksGetStatus";

export default function ConditionCell(props) {
  const {icon, text, flag, conditionStatus, onClick, isDisabled} = props
  const active = useSelector(state => state.dataContests?.dataActiveContest?.active)
  const isModerator = useCheckIsModerator()

  let flagCondition = false
  let disabled = true
  if (!_isUndefined(conditionStatus)) {
    flagCondition = true
    disabled = conditionStatus
  }
  if (isModerator) {
    disabled = false
  }

  return (
    <div className={css.container}>
      {flag
        ? <SimpleCell
            disabled={isDisabled || !active || disabled}
            onClick={!active || disabled || onClick}
            before={<img className={css.icon} src={icon} alt='img'/>}
            after={<>{flagCondition && active  || isModerator
              ? <Checkbox flag={conditionStatus}/>
              : null}</>}
          ><div className={css.text}>{text}</div></SimpleCell>
        : null}
    </div>
  )
}
