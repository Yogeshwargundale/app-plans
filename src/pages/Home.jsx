import React,{ Component } from 'react';
import './style.css';
import {Card ,Row, Col,Switch, Icon} from 'antd';
const axios = require('axios');
const plan='monthly';
class App extends Component {

    constructor(props){
        super(props);
        this.state={
            data :[],
            plan:'monthly'
        }
    }

    componentDidMount(){
    this.fetchData();
  }

  onPlanChange = (checked)=>{
    
    console.log(checked);
    {checked?this.setState({'plan':'year'}):this.setState({plan:'monthly'})}
    this.fetchData();

  }
  fetchData = ()=>{
      
       
        var self=this;
          axios({
            method: 'get',
            url: 'http://www.mocky.io/v2/5e3156863200007200888450',
          })
            .then(function (response) {
              const resp = response.data.plans;
              const result = resp.filter((item)=> item.interval ===self.state.plan);
              self.setState({data:result});
              console.log(self.state.data);
              
            })
            .catch(function (error) {
                  // handle error
                  console.log(error);
                });
  }

  render(){
    return (
      <div>

      <Row>
            {/* <Col span={1}></Col> */}
            {/* <Col span={16}>  */}

            <Row >
              <Col offset={2} span={3}></Col>
                <Col span={6}>
                <div style={{padding:'25px'}}>
                    <span className='plan-caption'>MONTHLY</span> 
                      <Switch  onChange={this.onPlanChange} /> 
                    <span className='plan-caption'>YEARLY</span> <br/>
                </div>
                </Col>
              </Row>
            <div >
            <Row >
              <Col offset={2} span={3}></Col>
            {this.state.data.map((info)=>{
            return (
                      <Col gutter={1} md={4} span={4}>
                      <Card 
                        title={info.planName} 
                        cover={<Icon type='user'></Icon>}
                        hoverable 
                        
                        style={{ width: 240 ,borderRadius:'15px',alignContent:'center'}}  
                        >
                          <span className='desc'>{info.planDescription}</span><br/><br/>
                          <div><span className='currency'>{info.currencySymbol}</span><span className='amt'>{info.amount}</span><span className='month'>/month</span></div><br/><br/>
                          {
                            info.features.map((list,id)=>{
                            return <div ><Icon style={{color:'green'}}type='check' />{' '}{' '}<span key={{id}}className='features'>{list}</span></div>
                            })
                          }
                          
                      </Card>
                      </Col>
                    )
            })}
            </Row>
        </div>
        {/* </Col> */}
        {/* <Col span={4}></Col> */}
      </Row>
      </div>
    )
  }
}

export default App;
