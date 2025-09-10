import axios from 'axios'

export async function getJobs() {
  const res = await axios.get('/data/jobs.json')
  return res.data
}
