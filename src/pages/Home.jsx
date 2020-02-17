import React,{ Component } from 'react';
// import './style.css';
import {Card ,Row, Col,Switch, Icon} from 'antd';
const axios = require('axios');
const plan='monthly';
class App extends Component {

    constructor(props){
        super(props);
        this.state={
            data :[],
            name:'apptitle',
            plan:''
        }
    }

    componentWillMount(){
      localStorage.setItem(plan,'monthly')
    this.fetchData();
  }

  call= (res)=>{
    //   this.setState({data:res})
      console.log(res)
  }

  onPlanChange = (checked)=>{
    
    console.log(checked);
    {checked?localStorage.setItem(plan,'year'):localStorage.setItem(plan,'monthly')};
    console.log(localStorage.getItem(plan));
    this.fetchData();

  }
  fetchData = ()=>{
      
        // axios.get('http://www.mocky.io/v2/5e3156863200007200888450')
        //   .then(function (response) {
        //     // handle success
            
        //     console.log(response);
        //     const resp = response.data.plans;
           
        //     const result = resp.filter((item)=> item.interval ===localStorage.getItem(plan));
            
        //     // const year = resp.filter((item)=> item.interval ==='year')
        //     // const monthly = resp.filter((item)=> item.interval ==='monthly')
        //     // console.log(year);
        //     // console.log(monthly);
        //     console.log(result);
            
        //   })
        //   .catch(function (error) {
        //     // handle error
        //     console.log(error);
        //   })
        var self=this;
          axios({
            method: 'get',
            url: 'http://www.mocky.io/v2/5e4a880b2f0000290097d2d2',
          })
            .then(function (response) {
              const resp = response.data.plans;
              const result = resp.filter((item)=> item.interval ===localStorage.getItem(plan));
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
      // <div className="App">
      // <h2>plan details </h2>
    
      //     <div><Switch defaultChecked onChange={this.onPlanChange} /></div> 
      //   <Card
      //    hoverable
      //   >

      //   </Card>
      // </div>
      <div>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
        <h2>plan details : {localStorage.getItem(plan) }</h2>
        <div>MONTHLY <Switch  onChange={this.onPlanChange} /> YEARLY</div>
        <Row>
        {this.state.data.map((info)=>{
         return (
                  
                  <Card 
                    title={info.planName} 
                    cover={<Icon type='user'></Icon>}
                    hoverable 
                    bordered={false}
                    style={{ width: 240 }}  
                    >
                      <span>{info.planDescription}</span><br/>
                      <span>{info.currencySymbol}{info.amount}/month</span>
                      {
                        info.features.map((list)=>{
                          return <ul><li>{list}</li></ul>
                        })
                      }
                       
                  </Card>
                )
        })}
        </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
      </div>
    )
  }
}

export default App;
