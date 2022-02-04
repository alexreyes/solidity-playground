// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract FundraisingDapp {

  struct Project {
    string title; 
    uint goal; // todo: how big should this uint be? Can I make it smaller?
    string description; 
  }

  Project[] public projects; 

  // todo: when to use calldata vs memory?
  function createProject(string memory projectTitle, uint projectGoal, string memory projectDescription) external {
    projects.push(Project(projectTitle, projectGoal, projectDescription));
  }
}