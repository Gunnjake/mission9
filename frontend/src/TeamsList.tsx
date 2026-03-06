import { useEffect, useState } from 'react'
import TeamCard, { type Team } from './TeamCard'

// Teams list
function TeamsList() {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    fetch('/CollegeBasketballTeams.json')
      .then(res => res.json())
      .then(data => setTeams(data.teams))
  }, [])

  return (
    <section className="teams-grid">
      {teams.map(team => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </section>
  )
}

export default TeamsList
