let contacts = [
	{
		_id: 1, 
		nome: 'Foo'
	},
	{
		_id: 2, 
		nome: 'Bar'
	},
];

module.exports = function () {
	var controller = {};

	controller.getContactList = function (req, res) {
		res.json(contacts);
	};

	controller.getContact = function (req, res) {
		let idContact = req.params.id;
		console.log(idContact)
		let contact = contacts.filter(function(contact) {
			return contact._id == idContact;
		});
		console.log(contact)
		contact.length ?
			res.json(contact) :
			res.status(404).send('Contact not found');
	};

	return controller;
}