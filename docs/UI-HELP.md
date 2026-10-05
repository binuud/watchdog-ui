# UI

## Domain List

![Home Screen Domain List](/docs/ui-capture/1.home.png)

List of domains that are tracked by watchdog. This gives the following information
* Domain Mutated - Number of days since the who is data was changed
* Domain Expiry - Number of days to domain expiry
* Certs - Number of certs
* IP - Number of ip addresses associated with this domain
* Reachable - Each domain can be configured with multipe endpoints, even sub domains, to be checked for reachabiltiy

Actions
* Domain names when clicked takes user to the detailed domain page

## Domain Details

![Domain Details](/docs/ui-capture/2.domainDetails.png)

Detailed Information captured on the domain, which is selected.
* Summary information showing, number of days before the domain detail was changed on domain registry
* Number of days remaining for domain expiry
* Number of days remaining for certificate expiry
* All the IP addresses associated with the domain
* List of configured Endpoints, and its reachability information

![Whois](/docs/ui-capture/3.whois.png)

Detailed who is information. This data might be cached.

## Project List

![Project List](/docs/ui-capture/4.1.projectList.png)

Show the list of configured git hub projects.
* Project name as given in the config file
* Common ancestor, this is shown when master cannot be auto merged to remote (i.e) remote was changed after local was pulled
* Number of stashes in the local repo
* Number of open Issues in the GitHub project
* Number of open PR's in the Github Project
* Number of Modified files in the local repo
* Number of new files that needs to be staged in the local repo
* Number of commits the remote repo is ahead of local
* Number of commits the local repo is ahead of remote

Actions
* Project name is clickable, takes user to the github repo page
* Issues number is clickable, takes user to the issues page of github
* PR's number is clickable, takes user to the PR's page of github