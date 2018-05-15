# addressMock

Simple Mock API to test diverging Addresses.

Takes JSON in format:

{
	"postalcode": "12345",
	"street": "Street 1",
	"city": "New York"
}

outputs:

{
	"postalcode": "12345",
	"street": "Street 1diverging",
	"city": "New York",
  "zone": 1
}

zone = number between 0 and 4
street = street from request, concated with diverging if diverging address has been found
