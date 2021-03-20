#include <stdio.h>
#include <stdlib.h>
// Struct Node
typedef struct Node
{
	int data;
	struct Node *next;
} Node_t;
// Struct List
typedef struct List
{
	Node_t *head;
	int length;
} List_t;
// Prototypes
Node_t *createNewNode(int nodeData);
int *getDataNode(int n, List_t *list);
void deleteNode(Node_t *node);
void insertStartList(List_t *list, int nodeData);
void insertEndList(List_t *list, int nodeData);
void insertAfterList(int n, List_t *list, int nodeData);
int getLengthList(List_t *list);
int checkEmptyList(List_t *list);
void removeFirstNode(List_t *list);
void removeLastNode(List_t *list);
void removeParticularNode(int n, List_t *list);
List_t *newListInt(int numberOfNodes);
void printListInt(const List_t *list);
// Main
int main(void)
{
	return (0);
}
// Create a new node
Node_t *createNewNode(int nodeData)
{
	Node_t *newNode = (Node_t *) malloc(sizeof(Node_t));
	if (newNode == NULL)
		return (NULL);
	newNode->data = nodeData;
	newNode->next = NULL;
	return (newNode);
}
// Get data from node
int *getDataNode(int n, List_t *list)
{
	int position = 0;
	if(list->head == NULL)
		return (NULL);
	else
	{
		Node_t *ptr = list->head;
		while (position < n && ptr->next)
		{
			ptr = ptr->next;
			position++;
		}
		if (position != n)
			return (NULL);
		else
			return &ptr->data;
	}
}
// Delete a node
void deleteNode(Node_t *node)
{
	free(node);
}
// Insert a node at the beginning of the list
void insertStartList(List_t *list, int nodeData)
{
	Node_t *node = createNewNode(nodeData);
	node->next = list->head;
	list->head = node;
	list->length++;
}
// Insert a node at the end of the list
void insertEndList(List_t *list, int nodeData)
{
	Node_t *node = createNewNode(nodeData);
	if (list->head == NULL)
		list->head = node;
	else
	{
		Node_t *ptr = list->head;
		while (ptr->next)
			ptr = ptr->next;
		ptr->next = node;
	}
	list->length++;
}
// Insert a node after another node in the list
void insertAfterList(int n, List_t *list, int nodeData)
{
	int position = 0;
	Node_t *node = createNewNode(nodeData);
	if (list->head == NULL)
		list->head = node;
	else
	{
		Node_t *ptr = list->head;
		while (position < n && ptr->next)
		{
			ptr = ptr->next;
			position++;
		}
		node->next = ptr->next;
		ptr->next = node;
	}
	list->length++;
}
// Get the length of the list
int getLengthList(List_t *list)
{
	return list->length;
}
// Check if the list is empty
int checkEmptyList(List_t *list)
{
	//return list-> = NULL;
}
// Remove first node from list
void removeFirstNode(List_t *list)
{
	if (list->head)
	{
		Node_t *eliminate = list->head;
		list->head = list->head->next;
		deleteNode(eliminate);
		list->length--;
	}
}
// Remove last node from list
void removeLastNode(List_t *list)
{
	if (list->head)
	{
		if (list->head->next)
		{
			Node_t *ptr = list->head;
			while (ptr->next->next)
				ptr = ptr->next;
			Node_t *eliminate = ptr->next;
			ptr->next = NULL;
			deleteNode(eliminate);
			list->length--;
		}
		else
		{
			Node_t *eliminate = list->head;
			list->head = NULL;
			deleteNode(eliminate);
			list->length--;
		}
	}
}
// Remove a particular node
void removeParticularNode(int n, List_t *list)
{
	int position = 0;
	if (list->head)
	{
		if (n == 0)
		{
			Node_t *eliminate = list->head;
			list->head = list->head->next;
			deleteNode(eliminate);
			list->length--;
		}
		else if (n < list->length)
		{
			Node_t *ptr = list->head;
			while (position < (n - 1))
			{
				ptr = ptr->next;
				position++;
			}
			Node_t *eliminate = ptr->next;
			ptr->next = eliminate->next;
			deleteNode(eliminate);
			list->length--;
		}

	}
}
// New list
List_t *newListInt(int nNodes)
{
	List_t *newList;
	newList = (List_t *) malloc(sizeof(List_t));
	if (newList == NULL)
		return (NULL);
	printf("Number of nodes: %d\n", nNodes);
	return (newList);
}
// Print list
void printListInt(const List_t *list)
{
	Node_t *node;
	for (node = list->head; node != NULL; node = node->next)
		printf("%d\n", node->data);
}
