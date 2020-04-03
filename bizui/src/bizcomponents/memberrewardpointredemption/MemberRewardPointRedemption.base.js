import React from 'react'
import { Icon,Divider, Avatar, Card, Col, Tag} from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
import styles from './MemberRewardPointRedemption.base.less'
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderAvatarCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
	defaultSearchLocalData,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderAvatarCell=defaultRenderAvatarCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell



const menuData = {menuName: window.trans('member_reward_point_redemption'), menuFor: "memberRewardPointRedemption",
  		subItems: [
  
  		],
}


const settingMenuData = {menuName: window.trans('member_reward_point_redemption'), menuFor: "memberRewardPointRedemption",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: window.trans('member_reward_point_redemption.id'),
  name: window.trans('member_reward_point_redemption.name'),
  point: window.trans('member_reward_point_redemption.point'),
  owner: window.trans('member_reward_point_redemption.owner'),

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'memberRewardPointRedemption') , sorter: true },
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.point, dataIndex: 'point', className:'money', render: (text, record) => renderTextCell(text, record), sorter: true  },
  { title: fieldLabels.owner, dataIndex: 'owner', render: (text, record) => renderReferenceCell(text, record), sorter:true},

]


const searchLocalData =(targetObject,searchTerm)=> defaultSearchLocalData(menuData,targetObject,searchTerm)
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
let counter = 0;
const genColor=()=>{
	counter++;
	return colorList[counter%colorList.length];
}
const followColor=()=>{
	return 'green';
	// return colorList[counter%colorList.length];
}
const leftChars=(value, left)=>{
	const chars = left || 4
	if(!value){
		return "N/A"
	}
	return value.substring(0,chars);
}

const renderReferenceItem=(value, targetComponent)=>{
	const userContext = null
	if(!value){
		return <Tag color='red'>{appLocaleName(userContext,"NotAssigned")}</Tag>
	}
	if(!value.id){
		return <Tag color='red'>{appLocaleName(userContext,"NotAssigned")}</Tag>
	}
	if(!value.displayName){
		return <Tag color='red'>{appLocaleName(userContext,"NotAssigned")}</Tag>
	}
	
	return <Tag color='blue' title={`${value.displayName}()`}>{leftChars(value.displayName)}</Tag>
	
	
	
	
}
const renderItemOfList=(memberRewardPointRedemption, targetComponent, columCount)=>{
  
  if(!memberRewardPointRedemption){
  	return null
  }
  if(!memberRewardPointRedemption.id){
  	return null
  }
  
  
  const displayColumnsCount = columCount || 4
  const userContext = null
  return (
    <Card key={`memberRewardPointRedemption-${memberRewardPointRedemption.id}`} style={{marginTop:"10px"}}>
		
	<Col span={4}>
		<Avatar size={90} style={{ backgroundColor: genColor(), verticalAlign: 'middle' }}>
			{leftChars(memberRewardPointRedemption.displayName)}
		</Avatar>
	</Col>
	<Col span={20}>
	  
	  
	 
	
      <DescriptionList  key={memberRewardPointRedemption.id} size="small" col={displayColumnsCount} >
        <Description term={fieldLabels.id} style={{wordBreak: 'break-all'}}>{memberRewardPointRedemption.id}</Description> 
        <Description term={fieldLabels.name} style={{wordBreak: 'break-all'}}>{memberRewardPointRedemption.name}</Description> 
        <Description term={fieldLabels.point}><div style={{"color":"red"}}>{memberRewardPointRedemption.point}</div></Description> 
        <Description term={fieldLabels.owner}>{renderReferenceItem(memberRewardPointRedemption.owner)}</Description>

	
        
      </DescriptionList>
     </Col>
    </Card>
	)

}
	
const packFormValuesToObject = ( formValuesToPack )=>{
	const {name, point, ownerId} = formValuesToPack
	const owner = {id: ownerId, version: 2^31}
	const data = {name, point, owner}
	return data
}
const unpackObjectToFormValues = ( objectToUnpack )=>{
	const {name, point, owner} = objectToUnpack
	const ownerId = owner ? owner.id : null
	const data = {name, point, ownerId}
	return data
}
const stepOf=(targetComponent, title, content, position, index)=>{
	return {
		title,
		content,
		position,
		packFunction: packFormValuesToObject,
		unpackFunction: unpackObjectToFormValues,
		index,
      }
}
const MemberRewardPointRedemptionBase={menuData,settingMenuData,displayColumns,fieldLabels,renderItemOfList, stepOf, searchLocalData}
export default MemberRewardPointRedemptionBase

