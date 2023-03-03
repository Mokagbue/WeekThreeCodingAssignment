// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

// Guild -> [Adventuring Party Members
// Guild: guild name, list of guild members

// Player -> [Makes Characters]
// Player: player name, list of characters they have made

// Characters:
// character name (text input),
// race (human, orc, elf, dwarf, etc)(text input),
// class (wizard, rogue, fighter)(text input)

//Guild create/add GuildMembers, view members, and delete members

// Player create Characters, view their Chracters, and delete Characters

// Cons: not being able to 'select' options leaves input in the users hands, which can be ... interesting.
// can look into making selects later, right now the focus is understanding Classes

// Character Class
class Member {
  constructor(memberName, memberRace, memberClass) {
    this.memberName = memberName;
    this.memberRace = memberRace;
    this.memberClass = memberClass;
  }
  present() {
    return `New Charater Created: ${this.memberName} is an ${this.memberRace} ${this.memberClass}.`;
  }
}

// Guild Class
class Guild {
  constructor(guildName) {
    this.guildName = guildName;
    this.members = [];
  }
  addMember(member) {
    if (member instanceof Member && this.members.length < 4) {
      //this operator: instanceOf is checking if the new character object was creaeted using the Character class/blueprints
      this.members.push(member);
    } else if (this.members.length >= 4) {
      throw new Error(
        `${this.guildName}, your guild has the maximum allowed members. Delete a member if you wish to try again.`
      );
    } else {
      throw new Error(`Not a valid character: ${member}`);
    }
  }
  present() {
    return `${this.guildName} has added a new guild member. You now have ${this.members.length} guild members.`;
  }
}

class GuildMaker {
  constructor() {
    this.guilds = [];
    this.selectedGuild = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createGuild();
          break;
        case "2":
          this.viewGuild();
          break;
        case "3":
          this.DeleteGuild();
          break;
        case "4":
          this.displayGuilds();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Guilds United!...some other time...");
  }

  showMainMenuOptions() {
    return prompt(`
        0. exit
        1. create a new guild.
        2. view a guild.
        3. delete a guild.
        4. show all guilds.
        `);
  }

  showGuildMenuOptions(guildInfo) {
    return prompt(`
        0. back
        1. add a new member
        2. delete a member
        ${guildInfo}
        `);
  }

  displayGuilds() {
    let guildNameString = "";
    
    for (let i = 0; i < this.guilds.length; i++) {
      guildNameString += i + ". " + this.guilds[i].guildName + "\n"; //debugging lesson, I had wrapped (guildNameString += i) and that was making the loop close at that part, wasn;t reading the '.' or the guild name. So note to self we dont need to close expressions in cases like this.
    }
    console.log("guild name?", guildNameString)
    alert(guildNameString);
  }

  createGuild() {
    let guildName = prompt("Enter a new Guild name");
    this.guilds.push(new Guild(guildName));
  }

  viewGuild() {
    // change to view by guild name not index
    let index = prompt("Enter the Guild Number you want to look at: ");
    if (index > -1 && index < this.guilds.length) {
      this.selectedGuild = this.guilds[index];
      let guildInfo = "Guild Name: " + this.selectedGuild.guildName + "\n";
       //description += " " +  this.selectedGuild.describe() + '\n';

      for (let i = 0; i < this.selectedGuild.members.length; i++) {
        guildInfo +=
          i +
          "." +
          this.selectedGuild.members[i].memberName +
          " - " +
          this.selectedGuild.members[i].memberRace +
          " - " +
          this.selectedGuild.members[i].memberClass +
          "\n";
      }

      let subMenu = this.showGuildMenuOptions(guildInfo);
      switch (subMenu) {
        case "1":
          this.createMember();
          break;
        case "2":
          this.deleteMember();
      }
    }
  }

  deleteGuild() {
    let index = prompt("Enter the Guild Number you want to look at: ");
    if (index > -1 && index < this.guilds.length) {
      this.selectedGuild.splice(index, 1);
    }
  }

  createMember(){
    let memberName= prompt('Enter the new members name');
    let memberRace = prompt('Enter the memebers race: Human, Elf, Dwarf, Orc');
    let memberClass = prompt('Enter the members class: Wizard, Fighter, Rogue');
    this.selectedGuild.addMember(new Member(memberName, memberRace, memberClass))
  }
  deleteMember(){
    let index = prompt("Enter the Guild Number of the member you want to expel from the guild: ");
    if (index > -1 && index < this.selectedGuild.members.length) {
      this.selectedGuild.members.splice(index, 1);
    }
  }
}

let menu = new GuildMaker()
menu.start();