function skillsMember() {
    var skills = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        getSkills: function() {
            return this.skills;
        }
    };
    console.log(skills.getSkills());
}