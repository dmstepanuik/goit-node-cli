const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve(__dirname, "./db/contacts.json");
async function writeContacts(contacts, index) {
  // console.log(`Write file index: ${index} `, contacts);
  await fs.promises.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  // console.log("read file contacts.json");
  return await fs.promises
    .readFile(contactsPath, "utf8")
    .then(JSON.parse)
    .catch(console.error);
}

async function getContactById(contactId) {
  const contacts = await listContacts();

  const contact = contacts.find((contact) => {
    return contact.id === contactId;
  });
  return contact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();

  const contactIndex = contacts.findIndex((item) => {
    return item.id === contactId;
  });
  if (contactIndex === -1) return false;
  const contact = contacts[contactIndex];
  contacts.splice(contactIndex, 1);
  await writeContacts(contacts, 1);
  return contact;
}

async function addContact(name, email, phone) {
  if (!name || !email || !phone) return false;
  const contacts = await listContacts();
  const contact = { id: Date.now(), name, email, phone };
  contacts.push(contact);

  await writeContacts(contacts, 2);
  return contact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
