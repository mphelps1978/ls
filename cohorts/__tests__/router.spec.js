const request = require('supertest')
const server = require('../../api/server')

describe('Cohorts Router', () => {
  it('Should run the tests', () => {
    expect(true).toBe(true)
  })
  describe('GET /', () =>{
    it('Should return a status 200 OK', async () =>{
      await request(server).get('/api/cohorts')
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
    it('Should return cohorts as the router value', async () =>{
      await request(server).get('/api/cohorts')
      .then(res => {
        expect(res.body.router).toBe('cohorts')
      })
    })
  })
})