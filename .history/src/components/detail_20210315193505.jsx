import React, { useState } from 'react'

const Detail = ({ data }) => {
	const { phone, email, gender } = data
	const name = data.name.title + '. ' + data.name.first + ' ' + data.name.last
	const username = data.login.username
	const date = data.dob.date.slice(0, 10)
	const location =
		data.location.city + ',' + data.location.state + ',' + data.location.country + ' ' + data.location.postcode
	const picture = data.picture.large
	console.log(name, date, location, phone, email, gender)

	return (
		<div className="detail">
			<section className="left-section">
				<img src={picture} className="detail-pic" alt={`${name}'s photo`} />
			</section>
			<section className="right-section">
				<div className="detail-info detail-name">
					{name}
					<p className="detail-name2">
						(<em>username:</em> {username})
					</p>
				</div>
				<div className="detail-info detail-sex-date">
					<div className="detail-date detail-font">Date: {date}</div>
					<div className="detail-font">Gender: {gender}</div>
				</div>
				<div className="detail-info detail-font">Phone: {phone}</div>
				<div className="detail-info detail-font">Email: {email}</div>
				<div className="detail-info detail-font">Location: {location}</div>
			</section>
		</div>
	)
}

export default Detail

/*
cell: "081-832-2682"
dob: {date: "1988-04-22T23:25:16.200Z", age: 33}
email: "dale.nguyen@example.com"
gender: "male"
id: {name: "PPS", value: "7308091T"}
location: {street: {…}, city: "Killarney", state: "Kerry", country: "Ireland", postcode: 23654, …}
login: {uuid: "3ab8c762-f43f-43ca-9c9d-3c11138a60b3", username: "organicsnake294", password: "rocky", salt: "8qo9oUQ2", md5: "81be558f8ae77e9a498210a2c9ad13e9", …}
name: {title: "Mr", first: "Dale", last: "Nguyen"}
nat: "IE"
phone: "011-256-4062"
picture: {large: "https://randomuser.me/api/portraits/men/6.jpg", medium: "https://randomuser.me/api/portraits/med/men/6.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg"}
registered: {date: "2004-02-01T11:39:32.987Z", age: 17}
*/
