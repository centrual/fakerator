import { expect } from "chai";

import Fakerator from "lib/fakerator";

describe("Default address", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check address.country", () => {
		expect(fakerator.populate("#{address.country}")).to.be.equal("Qatar");
		expect(fakerator.address.country()).to.be.equal("Bulgaria");
	});

	it("check address.city", () => {
		expect(fakerator.populate("#{address.city}")).to.be.equal("Merlestad");
		expect(fakerator.address.city()).to.be.equal("East Vernon");
	});

	it("check address.cityPrefix", () => {
		expect(fakerator.populate("#{address.cityPrefix}")).to.be.equal("Lake");
		expect(fakerator.address.cityPrefix()).to.be.equal("North");
	});

	it("check address.citySuffix", () => {
		expect(fakerator.populate("#{address.citySuffix}")).to.be.equal("chester");
		expect(fakerator.address.citySuffix()).to.be.equal("land");
	});

	it("check address.street", () => {
		expect(fakerator.populate("#{address.street}")).to.be.equal("96214 Annette Radial Apt. 543");
		expect(fakerator.address.street()).to.be.equal("64055 Jonathon Prairie Apt. 378");
	});

	it("check address.streetName", () => {
		expect(fakerator.populate("#{address.streetName}")).to.be.equal("Weber Plain");
		expect(fakerator.address.streetName()).to.be.equal("Gabriel Islands");
	});

	it("check address.streetSuffix", () => {
		expect(fakerator.populate("#{address.streetSuffix}")).to.be.equal("Route");
		expect(fakerator.address.streetSuffix()).to.be.equal("Crest");
	});

	it("check address.buildingNumber", () => {
		expect(fakerator.populate("#{address.buildingNumber}")).to.be.equal("196");
		expect(fakerator.address.buildingNumber()).to.be.equal("14353");
	});

	it("check address.postCode", () => {
		expect(fakerator.populate("#{address.postCode}")).to.be.equal("19621-4353");
		expect(fakerator.address.postCode()).to.be.equal("54360-6405");
	});

	it("check address.geoLocation", () => {
		let res = fakerator.address.geoLocation();
		expect(res).to.be.an("Object");
		expect(res.latitude).to.be.closeTo(40.4233, 0.01);
		expect(res.longitude).to.be.closeTo(-131.9741, 0.01);
	});

	it("check address.geoLocationNearBy", () => {
		let res = fakerator.address.geoLocationNearBy({
			latitude: 40,
			longitude: 19
		}, 100);
		expect(res).to.be.an("Object");
		expect(res.latitude).to.be.closeTo(39.85372, 0.01);
		expect(res.longitude).to.be.closeTo(17.8442, 0.01);

	});



})