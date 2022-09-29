# helm-charts
Helm charts for our microservices and tools

## Usage

[Helm](https://helm.sh) must be installed to use the charts.  Please refer to
Helm's [documentation](https://helm.sh/docs) to get started.

Once Helm has been set up correctly, add the repo as follows:

  helm repo add northroad-craftworks https://helm.northroad-craftworks.com

If you had already added this repo earlier, run `helm repo update` to retrieve
the latest versions of the packages.  You can then run `helm search repo
northroad-craftworks` to see the charts.

To install the microservices chart:

    helm install northroad-craftworks-microservices northroad-craftworks/microservices

To uninstall the chart:

    helm delete northroad-craftworks-microservices