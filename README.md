# FF-Drafter

This project powers the backend functionality for FF-Drafter and includes shared utilities.

## Project Structure
- **Backend**: Entry point is `backend.js`, executed via Electron.
- **Shared Utilities**: Reusable logic in `shared.js`.
- **Frontend App**: Frontend work for the app
- **Frontend Web**: Frontend work for the website

## Details
This project is going to be rather complex with a lot of working pieces. When I considered doing this project, I looked at other
websites and apps for reference. I took a lot of inspiration from [Flock Fantasy](https://flockfantasy.com/) and ESPN's popular Fantasy app.

There was obviously stuff I looked at and thought to myself, I could do better. To start, this will mainly focus on fantasy for NFL. So here's some features of the plan.

- Posts
  - Posted by experts
  - Comments can be made by accounts 
  - Categories
    - Game Review, Week Reviews, Injury Reports, Trade Targets, Drafts and Articles
  - Donator Posts & Public Posts
  - Publishing system
    - Experts/Admins can make posts but Admins are the ones to publish


- Player ranking system
  - By sport and by position
    - Additionally
      - By total points scored
      - By average points scored
      - By playoffs ease of schedule
      - By regular season ease of schedule
      - By expert ranking, can be a by a specific expert you trust
  - Search bar for finding that one player.
    - Auto-completion to provide list of players they could be searching for
    - Can search by position, name, team, or any mixture


- Player trade calculator
  - You enter players on your side of the trade and other side
    - Can select players from a chosen league and team
    - Would connect directly to your leagues (ESPN, Yahoo, Sleeper and ours)
  - Ability to suggest trades
  - Bar that rates the trade
    - Terrible, Not Good, Fair, Good, or Excellent
  - Would use [FantasyCalc](https://fantasycalc.com/) for rating


- Expert Reviews
  - Team Review 
    - Have your team reviewed by an expert and receive an in-depth analysis.
  - Trade Analysis
    - Get your trade analyzed to ensure you get the best side of the deal.
  - Start/Sit
    - Tough decision this week? Our experts will give you the best breakdown for you.
  - Personal Coach
    - 1. Personalized help from our team to ensure you’re making the best decisions.
    - 2. Experts will review the entire team, along with bringing up potential trade targets, help with current week start/sit, and waiver wire targets
    - 3. Additionally, experts will review all of your fantasy match ups for the rest of the season, providing you everything from above and also answer up to 5 questions.


- Fantasy League 
  - More customizable options for your league
    - Ability to customize how you want draft to go
      - Snake, Auction, Autopick, Offline, Dynasty, or Mock
    - Choose points awarding system
      - PPR (1 point per reception), 
      - Half-PPR (0.5 per reception), 
      - Tiered-PPR (0.5 for RB, 1.0 for WR and 1.5 for TE)
      - Standard (No points per reception)
      - Fully customizable choice, can use base
    - Set up how often to division rivals face
  - Incorporating money and betting
    - Can bet against your opponent
    - Can bet on other match ups
  - Roster Tab
    - Shows your Roster
  - Matchup 
    - Shows this week's match up
  - Players
    - Shows players on waiver wire
      - Wavier wire is how you bid on free agents and pick up talent for your roster
  - League
    - Scoreboard
    - Standings
    - Schedule
    - Playoff Bracket
    - Recent Activity
    - Budget Info
    - League Settings
    - League History



## Author(s)
**Pepzii**

## License
AGPL-3.0 License
