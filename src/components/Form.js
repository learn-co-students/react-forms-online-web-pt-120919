import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedDate: []
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
  //   let dataArray = this.sendFormDateSomewhere(formData)
  //   this.setState({
  //     submittedDate: dataArray
  //   })
  // }

  // listOfSubmissions = () => {
  //   return (
  //     this.state.submittedData.map(data => {
  //       return (
  //         <div>
  //           <span>
  //             {data.firtsName}
  //           </span>
  //           <span>
  //             {data.lastName}
  //           </span>
  //         </div>
  //       )  
  //     })
  //   )
  // }

  // render() {
  //   return (
  //     <form onSubmit={event => this.handleSubmit(event)}>
  //       <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
  //       <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
  //     </form>
  //   )
  // }
  render() {
    return (
      <div>
        <form>
            <input type="text" onChange={event => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName}></input>
            <input type="text" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName}></input>
        </form>
      </div>
    )
  }
}

export default Form;