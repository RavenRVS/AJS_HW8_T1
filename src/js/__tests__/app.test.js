import Team from '../app';

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  it('should add a character to the team', () => {
    const character = { name: 'Alice' };
    team.add(character);
    expect(team.members.size).toBe(1);
  });

  it('should throw an error when adding a duplicate character to the team', () => {
    const character = { name: 'Alice' };
    team.add(character);

    expect(() => {
      team.add(character);
    }).toThrowError('Character already exists in team');

    expect(team.members.size).toBe(1);
  });

  it('should add multiple characters to the team', () => {
    const alice = { name: 'Alice' };
    const bob = { name: 'Bob' };
    const charlie = { name: 'Charlie' };

    team.addAll(alice, bob, charlie);
    expect(team.members.size).toBe(3);
  });

  it('should not add duplicates when adding multiple characters to the team', () => {
    const alice = { name: 'Alice' };
    const bob = { name: 'Bob' };
    const charlie = { name: 'Charlie' };

    team.addAll(alice, bob, charlie, alice, bob);
    expect(team.members.size).toBe(3);
  });

  it('should convert the team to an array', () => {
    const alice = { name: 'Alice' };
    const bob = { name: 'Bob' };
    const charlie = { name: 'Charlie' };

    team.addAll(alice, bob, charlie);
    const membersArray = team.toArray();
    expect(membersArray).toEqual(expect.arrayContaining([alice, bob, charlie]));
  });
});
