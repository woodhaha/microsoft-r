/*
 * DeployRClient
 * Integration technology for deploying R and Python analytics inside web, desktop, mobile, and dashboard applications as well as backend systems. Turn your R or Python scripts into analytics web services, so code can be easily executed by applications running on a secure server.  The core APIs can be grouped into several categories, including: [Authentication](#authentication-apis), [Web Services](#services-management-apis), [Sessions](#session-apis), [Snapshots](#snapshot-apis), [Status](#status-apis), and [Centralized Configuration](#centralized-configuration-apis). 
 *
 * OpenAPI spec version: 9.2.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * GetComputeNodesResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2017-09-28T05:42:17.706Z")
public class GetComputeNodesResponse {
  @SerializedName("computeNodes")
  private List<String> computeNodes = null;

  public GetComputeNodesResponse computeNodes(List<String> computeNodes) {
    this.computeNodes = computeNodes;
    return this;
  }

  public GetComputeNodesResponse addComputeNodesItem(String computeNodesItem) {
    if (this.computeNodes == null) {
      this.computeNodes = new ArrayList<String>();
    }
    this.computeNodes.add(computeNodesItem);
    return this;
  }

   /**
   * List of all Compute Node URIs or Ranges.
   * @return computeNodes
  **/
  @ApiModelProperty(example = "[\"http://1.1.1.1\",\"http://1.1.1.1:10-12\"]", value = "List of all Compute Node URIs or Ranges.")
  public List<String> getComputeNodes() {
    return computeNodes;
  }

  public void setComputeNodes(List<String> computeNodes) {
    this.computeNodes = computeNodes;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetComputeNodesResponse getComputeNodesResponse = (GetComputeNodesResponse) o;
    return Objects.equals(this.computeNodes, getComputeNodesResponse.computeNodes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(computeNodes);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetComputeNodesResponse {\n");
    
    sb.append("    computeNodes: ").append(toIndentedString(computeNodes)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
  
}

