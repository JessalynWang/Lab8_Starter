// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('(616)616-6161 is a phone number', () => {
    expect(functions.isPhoneNumber('(616)616-6161')).toBe(true)
})

test('616-616-6161 is a phone number', () => {
    expect(functions.isPhoneNumber('616-616-6161')).toBe(true)
})

test('(hij)616-6161 is not phone number', () => {
    expect(functions.isPhoneNumber('(hij)hij-6161')).toBe(false)
})

test('0123456789 is not a phone number', () => {
    expect(functions.isPhoneNumber('0123456789')).toBe(false)
})

test('jess@gmail.com is a email', () => {
    expect(functions.isEmail('jess@gmail.com')).toBe(true)
})

test('jess1234@gmail.com is a email', () => {
    expect(functions.isEmail('jess1234@gmail.com')).toBe(true)
})

test('jess@gmailcom is not a email', () => {
    expect(functions.isEmail('jess@gmailcom')).toBe(false)
})

test('jessgmail.com is not a email', () => {
    expect(functions.isEmail('jessgmail.com')).toBe(false)
})

test('Pop123 is a password', () => {
    expect(functions.isStrongPassword('Pop123')).toBe(true)
})

test('Pop123_1234Jasd is a password', () => {
    expect(functions.isStrongPassword('Pop123_1234Jasd')).toBe(true)
})

test('Pop123** is not a password', () => {
    expect(functions.isStrongPassword('Pop123**')).toBe(false)
})

test('Pop123123123123123123123123123 is not a password', () => {
    expect(functions.isStrongPassword('Pop123123123123123123123123123')).toBe(false)
})

test('12/1/2022 is a date', () => {
    expect(functions.isDate('12/1/2022')).toBe(true)
})

test('1/12/2022 is a date', () => {
    expect(functions.isDate('1/12/2022')).toBe(true)
})

test('1/12/22 is not a date', () => {
    expect(functions.isDate('1/12/22')).toBe(false)
})

test('91/122022 is not a date', () => {
    expect(functions.isDate('91/122022')).toBe(false)
})

test('#123 is a hex', () => {
    expect(functions.isHexColor('#123')).toBe(true)
})

test('#ffF1ff is a hex', () => {
    expect(functions.isHexColor('#ffF1ff')).toBe(true)
})

test('#1234 is not a hex', () => {
    expect(functions.isHexColor('#1234')).toBe(false)
})

test('#1223*5 is not a hex', () => {
    expect(functions.isHexColor('#1223*5')).toBe(false)
})