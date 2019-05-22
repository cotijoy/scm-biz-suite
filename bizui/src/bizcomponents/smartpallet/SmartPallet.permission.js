

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'

import DashboardTool from '../../common/Dashboard.tool'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './SmartPallet.preference.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (smartPallet,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{smartPallet.id}</Description> 
<Description term="位置">{smartPallet.location}</Description> 
<Description term="联系电话">{smartPallet.contactNumber}</Description> 
<Description term="总面积">{smartPallet.totalArea}</Description> 
<Description term="纬度">{smartPallet.latitude}</Description> 
<Description term="经度">{smartPallet.longitude}</Description> 
<Description term="最后更新时间">{ moment(smartPallet.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = smartPallet => {
  const {SmartPalletBase} = GlobalComponents
  return <PermissionSetting targetObject={smartPallet}  targetObjectMeta={SmartPalletBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class SmartPalletPermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  smartPallet = this.props.smartPallet;
    const { id,displayName, goodsCount } = smartPallet
    const cardsData = {cardsName:"智能托盘",cardsFor: "smartPallet",cardsSource: smartPallet,
  		subItems: [
    
      	],
  	};
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const summaryOf = this.props.summaryOf || internalSummaryOf
   
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
      {renderPermissionSetting(cardsData.cardsSource)}
      
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  smartPallet: state._smartPallet,
}))(Form.create()(SmartPalletPermission))
