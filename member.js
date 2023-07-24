function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'moddules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}