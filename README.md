# branch-protector
Tries to prevent you pushing to a git branch by accident

## Description
branch-protector doesn't itself do anything to prevent you from pushing to a branch that you didn't mean to. You need to run it on a git hook.
It takes an argument of the branch you wish to protect and will return an exit code of 1 if you are currently on that branch, preventing the hooked git action from running.

## Install
`npm i -D branch-protector`

## Usage

branch-protector requires a branch that you want to protect and an optional action (defaults to 'push').

e.g.

`branch-protector master`

`branch-protector master commit`

Create an npm script:

```json
{
  "scripts": {
    "protect-master": "branch-protector master"
  }
}
```

Add a git hook that you would like branch-protector to run on.

For running before a git push try [pre-push](https://github.com/dflourusso/pre-push)
