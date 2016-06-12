package com.myblog;

import java.io.File;
import java.io.IOException;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.media.multipart.FormDataMultiPart;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.media.multipart.file.FileDataBodyPart;

public class FileTest {
	public static void main(String[] args) throws IOException 
	{
	    final Client client = ClientBuilder.newBuilder().register(MultiPartFeature.class).build();
	 
	    final FileDataBodyPart filePart = new FileDataBodyPart("file", new File("/home/varshini/Downloads/10_Share.jpg"));
	    FormDataMultiPart formDataMultiPart = new FormDataMultiPart();
	    final FormDataMultiPart multipart = (FormDataMultiPart) formDataMultiPart.field("foo", "bar").bodyPart(filePart);
	      
	    final WebTarget target = client.target("http://localhost:8080/myblog-webapp/webapi/blogImage/pdf");
	    final Response response = target.request().post(Entity.entity(multipart, multipart.getMediaType()));
	     System.out.println("response hhhh  "+response.getStatus());
	    //Use response object to verify upload success
	     
	    formDataMultiPart.close();
	    multipart.close();
	}

}
