(function () {
  angular.module('app.mock').value('MockMemberships', [
    // Unconfirmed Hospital member
    {
      id: '00000000-0000-0000-0000-000000000001',
      mail: 'j.wisgerhof@library.uq.edu.au',
      type: 'hospital',
      title: 'Mr',
      firstName: 'Hospital',
      sn: 'Patron',
      homeAddress_0: 'UQ Library',
      homeAddress_city: 'Brisbane',
      homeAddress_state: 'QLD',
      homeAddress_postcode: '4072',
      phone: '035555555',
      dateOfBirth: '22-11-1986',
      hospitalMail: 'no-reply',
      hospitalMailDomain: 'library.uq.edu.au',
      hospitalClass: 'Allied Health Professional',
      hospitalService: 'Lady Cilento Children\'s Hospital',
      hospitalEmpType: 'Continuing',
      hospitalAddress_0: 'LCCH Hospital',
      hospitalAddress_1: 'Brisbane QLD 4072, Australia',
      submittedOn: '2013-07-31 08:13:57',
      confirmedOn: null,
      expiresOn: '28-02-2014',
      status: 'unconfirmed'
    },
    // Unconfirmed ALumniFriends member
    {
      id: '00000000-0000-0000-0000-000000000002',
      mail: 'j.wisgerhof@library.uq.edu.au',
      type: 'alumnifriends',
      title: 'Mr',
      firstName: 'Alumni',
      sn: 'Friends',
      homeAddress_0: 'UQ Library',
      homeAddress_city: 'Brisbane',
      homeAddress_state: 'QLD',
      homeAddress_postcode: '4072',
      phone: '035555555',
      dateOfBirth: '22-11-1986',
      submittedOn: '2013-07-31 08:13:57',
      confirmedOn: null,
      expiresOn: '28-02-2014',
      status: 'unconfirmed'
    },
    // Confirmed Hospital member
    {
      id: '00000000-0000-0000-0000-000000000003',
      mail: 'j.wisgerhof@library.uq.edu.au',
      type: 'hospital',
      title: 'Mr',
      firstName: 'Hospital',
      sn: 'Patron',
      homeAddress_0: 'UQ Library',
      homeAddress_city: 'Brisbane',
      homeAddress_state: 'QLD',
      homeAddress_postcode: '4072',
      phone: '035555555',
      dateOfBirth: '22-11-1986',
      hospitalMail: 'no-reply',
      hospitalMailDomain: 'library.uq.edu.au',
      hospitalClass: 'Allied Health Professional',
      hospitalService: 'Lady Cilento Children\'s Hospital',
      hospitalEmpType: 'Continuing',
      hospitalAddress_0: 'LCCH Hospital',
      hospitalAddress_1: 'Brisbane QLD 4072, Australia',
      submittedOn: '2013-07-31 08:13:57',
      confirmedOn: null,
      expiresOn: '28-02-2014',
      status: 'confirmed'
    },
    // Unconfirmed Alumni member
    {
      id: '00000000-0000-0000-0000-000000000004',
      mail: 'j.wisgerhof@library.uq.edu.au',
      type: 'alumni',
      title: 'Mr',
      firstName: 'Alumni',
      sn: 'Person',
      homeAddress_0: 'UQ Library',
      homeAddress_city: 'Brisbane',
      homeAddress_state: 'QLD',
      homeAddress_postcode: '4072',
      phone: '035555555',
      dateOfBirth: '22-11-1986',
      submittedOn: '2013-07-31 08:13:57',
      confirmedOn: null,
      expiresOn: '28-02-2014',
      status: 'unconfirmed'
    }
  ]);
})();
